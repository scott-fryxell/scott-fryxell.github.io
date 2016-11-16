(function() {
  var coffee, concat, gulp, include, jquery, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Fragment = (function() {
    function Fragment() {
      window.onhashchange(function() {
        var fragment;
        $('body').attr('id', '');
        fragment = window.location.hash.substring(1);
        console.log("event: " + fragment);
        $('body').attr('id', fragment);
        return $(document).trigger(fragment);
      });
    }

    return Fragment;

  })();

  this.Item = (function() {
    function Item() {
      $(document).app_init(this);
      this.role = new Roles(this);
      this.reconcilor = new Reconcilor(this);
      this.listner = new Listener(this);
      console.log("load." + ($.page_scope()));
      $(document).trigger("load." + ($.page_scope()));
    }

    return Item;

  })();

  this.Listener = (function() {
    function Listener() {}

    constructor(function(item) {
      this.events = new EventSource('/events');
      $(this.events).on("message", (function(_this) {
        return function(event) {
          return console.info('message from /events', event.data);
        };
      })(this));
      $(this.events).on("open", (function(_this) {
        return function(event) {
          return console.info('bound to events server');
        };
      })(this));
      return $(this.events).on("error", (function(_this) {
        return function(event) {
          return console.error('server event error:', event.data);
        };
      })(this));
    });

    return Listener;

  })();

  this.Reconcilor = (function() {
    function Reconcilor() {}

    constructor(function() {
      this.app_cache = window.applicationCache;
      $(this.app_cache).on('noupdate', (function(_this) {
        return function() {
          _this.role.check();
          console.log("load." + ($.page_scope()));
          return $(document).trigger("load." + ($.page_scope()));
        };
      })(this));
      return $(this.app_cache).on('updateready', (function(_this) {
        return function() {
          _this.app_cache.update();
          _this.app_cache.swapCache();
          return $.get("" + window.location.pathname).done(function(data) {
            var html;
            html = $.parseHTML(data);
            html = $(html).filter(':not(title, meta, link, script, style)');
            $('body').html(html);
            _this.role.check();
            return $(document).app_init();
          });
        };
      })(this));
    });

    return Reconcilor;

  })();

  $(document).on('item.update', 'data#items', function() {
    new Item();
    return $(this).find('[itemscope]').each(function() {
      var item_id;
      item_id = $(this).attr('itemid');
      $(this).remove();
      return $("[itemid='" + item_id + "']");
    });
  });

  $(document).on('change', "[itemprop]", function() {
    var item_id, parent;
    if (!($(this).parents("form").length > 0)) {
      parent = $(this).parents("[itemscope], [itemref]").first();
      if (!(item_id = $(parent).attr('itemid'))) {
        item_id = $(parent).attr('itemref');
      }
      return jQuery.ajax({
        url: item_id,
        headers: {
          retrieve_as_data: "true"
        },
        type: 'put',
        data: ($(this).attr('itemprop')) + "=" + ($(this).get_value(this)),
        success: function(data) {
          console.log("item.update");
          $('data#items').append(jQuery.parseHTML(data));
          return $('data#items').trigger('item.update');
        },
        error: function(data, textStatus, jqXHR) {
          return console.error("Error updating this item", data, textStatus, jqXHR);
        }
      });
    }
  });

  gulp = require('gulp');

  util = require('gulp-util');

  coffee = require('gulp-coffee');

  include = require('gulp-include');

  concat = require('gulp-concat');

  jquery = require('jquery');

  gulp.task('scripts', function() {
    return gulp.src('item/**/*.coffee').pipe(concat('item.coffee')).pipe(coffee()).pipe(gulp.dest('build'));
  });

  gulp.task('jquery', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.js', 'item/item.js']).pipe(concat('application.js')).pipe(gulp.dest('build'));
  });

  gulp.task('default', ['scripts', 'jquery']);

  gulp.watch('item/**/*.coffee', ['scripts']);

  jQuery.update_view = function(item) {
    return $('html').update_view(item);
  };

  jQuery.items = function() {
    return $('html').items();
  };

  jQuery.page_scope = function() {
    return ("" + ($('body').attr('class').replace(' ', '.'))).trim();
  };

  jQuery.fn.extend({
    app_init: function() {},
    items: function() {
      document.items = {};
      $(this).find("[itemscope], [itemref]").each(function() {
        var item, item_id;
        item = {};
        if ($(this).attr('itemtype')) {
          item.type = $(this).attr('itemtype');
        }
        if (!(item_id = $(this).attr('itemid'))) {
          item_id = $(this).attr('itemref');
        }
        document.items[item_id] = item;
        return $(this).find("[itemprop]").each(function() {
          var check_id, parent;
          parent = $(this).parents("[itemscope], [itemref]").first();
          if (!(check_id = $(parent).attr('itemid'))) {
            check_id = $(parent).attr('itemref');
          }
          if (item_id === check_id) {
            item[$(this).attr('itemprop')] = $(this).get_value();
          }
          return $(document.items[item_id]).extend(item);
        });
      });
      return document.items;
    },
    get_value: function() {
      var val;
      if ($(this).is('input' || $(this).is('textarea' || $(this).is('select')))) {
        if ($(this).val()) {
          return $(this).val().trim();
        } else {
          return '';
        }
      } else if ($(this).attr('data-value')) {
        return $(this).attr('data-value');
      } else if ($(this).is('a' || $(this).is('link'))) {
        return $(this).attr('href');
      } else if ($(this).is('img' || $(this).is('object' || $(this).is('embed')))) {
        return $(this).attr('src');
      } else if ($(this).is('meta')) {
        return $(this).attr('content');
      } else if ($(this).is('time')) {
        return $(this).attr('datetime');
      } else {
        if ($(this).text()) {
          val = $(this).text().trim();
          if (val === 'true') {
            return true;
          }
          if (val === 'false') {
            return false;
          } else {
            return val;
          }
        }
      }
    },
    update_view: function() {
      console.log('updating view', this);
      return $.each(item, function(key, value) {
        if (value != null) {
          return $("[itemprop='" + key + "']").each(function() {
            if ($(this).is('input' || $(this).is('select' || $(this).is('textarea')))) {
              $(this).val(value);
            } else if ($(this).attr('data-value')) {
              $(this).attr("data-value", value);
            } else if ($(this).is('a' || $(this).is('link'))) {
              $(this).attr('href', value);
            } else if ($(this).is('img' || $(this).is('object' || $(this).is('embed')))) {
              $(this).attr("src", value);
            } else {
              $(this).text(value);
            }
            return $(this).trigger('item.changed');
          });
        }
      });
    }
  });

  this.Endless = (function() {
    function Endless() {
      this.wait = bind(this.wait, this);
      this.next = bind(this.next, this);
      document.endless = this;
      this.page = 1;
      this.check = false;
      this.height = $('body > main').height();
      $('input[type=range].endless').change(function() {
        var column, i, len, ref, results;
        ref = ['2', '3', '4', '6', '8', '12'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          column = ref[i];
          if (column === this.value) {
            results.push($('section.endless').attr('data-per-row', this.value));
          } else {
            results.push(void 0);
          }
        }
        return results;
      });
      if ($('section.endless').length) {
        $('body').on('next.endless', document.endless.next);
        setInterval(document.endless.wait, 3000);
        $(window).scroll(function() {
          if (document.endless.check) {
            document.endless.check = false;
            if ($(window).scrollTop() > $(document).height() - $(window).height() - 350) {
              return $('body').trigger('next.endless');
            }
          }
        });
      }
      $(window).scroll();
    }

    Endless.prototype.next = function() {
      this.page++;
      $('body').off('load.endless', document.endless.next);
      return jQuery.get(window.location + "/endless/" + this.page, function(data) {
        $('body > footer').before(data);
        $('body:last-child').trigger('load.endless');
        if ($('section.endless').last().html().trim().length) {
          return $('body').on('next.endless', document.endless.next);
        } else {
          $('section.endless').last().remove();
          return clearInterval(document.endless.wait);
        }
      });
    };

    Endless.prototype.wait = function() {
      return this.check = true;
    };

    return Endless;

  })();

  this.Roles = (function() {
    function Roles() {
      this.check();
    }

    Roles.prototype.check = function() {
      var ref, ref1;
      console.info("checking for roles");
      $('body').attr("data-role", '');
      if (((ref = $(document).items()['/me']) != null ? ref.admin : void 0) != null) {
        $('body').attr("data-role", 'admin');
        $(document).trigger("admin." + ($.page_scope()));
      }
      if (((ref1 = $(document).items()['/me']) != null ? ref1.fan : void 0) != null) {
        $('body').attr("data-role", 'fan');
        return $(document).trigger("fan." + ($.page_scope()));
      } else {
        $('body').attr("data-role", 'guest');
        return $(document).trigger("guest." + ($.page_scope()));
      }
    };

    return Roles;

  })();

  jQuery.fn.extend({
    app_init: function() {
      $(this).find('time').timeago();
      $(this).find('[data-cents]').show_dollars(this);
      $(this).find('body > header > figure:first-of-type').click(function() {
        $(this).toggleClass('show');
        return $('body > menu').toggleClass('show');
      });
      $("menu.fan.signout > a").attr('href', "/signout?redirect_to=" + window.location.pathname);
      return true;
    }
  });

  jQuery.extend({
    tip_amount_options: [5, 10, 25, 50, 75, 100, 200, 300, 500, 1000, 1500, 2000]
  });

  jQuery.fn.extend({
    format_cents_to_dollars: function(property_name) {
      return $("*[itemprop=" + property_name + "]").not('input').not('select').each(function() {
        var cents;
        cents = $(this).text().trim();
        return $(this).cents_to_dollars(cents);
      });
    },
    cents_to_dollars: function(cents) {
      var dollars;
      console.log('cents to dollars', cents);
      dollars = (parseFloat(cents) / 100.00).toFixed(2);
      if ($(this).is('input')) {
        return $(this).val(dollars);
      } else {
        return $(this).text(dollars);
      }
    },
    show_dollars: function() {
      if ($(this).attr('data-cents')) {
        return $(this).cents_to_dollars($(this).attr('data-cents') || 0);
      } else {
        return $(this).text(0);
      }
    }
  });

  jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
    var token;
    if (!options.crossDomain) {
      if (token = $('meta[name="csrf-token"]').attr('content')) {
        return xhr.setRequestHeader('X-CSRF-Token', token);
      }
    }
  });

  $(document).on('click', 'details[itemscope]', function() {
    return jQuery.ajax({
      url: $(this).attr('itemid'),
      headers: {
        retrieve_as_data: "true"
      },
      success: (function(_this) {
        return function(data) {
          $(_this).unbind('click');
          $(_this).append(data);
          new Items(_this);
          return $(_this).find('time').timeago();
        };
      })(this),
      statusCode: {
        401: (function(_this) {
          return function() {
            $(_this).trigger("401");
            return console.debug("you don't have rights to view this resource");
          };
        })(this)
      }
    });
  });

  $(document).on('submit', '[itemscope] form, [itemref] form', function() {
    var action, form, id, item_element, item_index, method, type;
    event.preventDefault();
    if ($(this).find("[itemprop]").length === 0 && 'delete' !== $(this).attr('method')) {
      return true;
    }
    item_element = $(this).parents('[itemscope], [itemref]');
    if (!(id = $(item_element).attr('itemid'))) {
      id = $(item_element).attr('itemref');
    }
    item_index = 0;
    type = $(item_element).attr('itemtype');
    form = this;
    action = $(this).attr('action');
    if (!action) {
      action = id;
    }
    method = $(this).attr('method').toLowerCase();
    $(form).trigger('item.validate');
    if ($(form).find('.invalid').size() > 0) {
      return false;
    }
    jQuery.ajax({
      url: action,
      type: method,
      data: $(this).serialize(),
      error: function(data, textStatus, jqXHR) {
        $(form).trigger('item.error');
        $(item_element).update_view(item_element.items());
        return console.error("error submiting item form " + id, data, textStatus, jqXHR);
      },
      success: function(data, textStatus, jqXHR) {
        return $(form).trigger("item." + method, [data, textStatus, jqXHR]);
      }
    });
    return false;
  });

}).call(this);
