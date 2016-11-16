(function() {
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
    function Item(document) {
      alert("what the fuck dude");
      $(document).page_init(this);
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
    page_init: function() {},
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

}).call(this);
