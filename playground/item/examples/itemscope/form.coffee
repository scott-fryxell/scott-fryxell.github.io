$(document).on 'submit', '[itemscope] form, [itemref] form', ->

  # capture form submissions for items. Determine
  # their values and submit the data via ajax.
  # this means forms are submited with CSRF protection
  # without requireing the forms themselves to know the token
  # The form is only submited if there are elements with
  # itemprop set

  event.preventDefault()

  # if their are no Items in the form just end the submit.
  # this assumes that some other actor is going to be taking
  # care of business

  if $(@).find("[itemprop]").length == 0 and 'delete' != $(@).attr('method')
    return true

  item_element = $(@).parents '[itemscope], [itemref]'

  unless id = $(item_element).attr 'itemid'
    id = $(item_element).attr 'itemref'

  item_index = 0;  # TODO get the index based on itemId
  type = $(item_element).attr 'itemtype'
  form = @
  action = $(@).attr 'action'

  unless action
    # determine the action from the itemscope
    action = id

  method = $(@).attr('method').toLowerCase()

  $(form).trigger 'item.validate'

  if $(form).find('.invalid').size() > 0
    return false;

  jQuery.ajax
    url: action
    type: method
    data: $(@).serialize()
    error: (data, textStatus, jqXHR) ->
      # let any listeners know that there was a problem with the form submit
      $(form).trigger 'item.error'
      $(item_element).update_view(item_element.items());
      console.error("error submiting item form #{id}", data, textStatus, jqXHR);

    success: (data, textStatus, jqXHR) ->
      # let any listeners know that any the form submited succesfully update.
      # TODO we leave updating the items to the listener of this method. this is risky
      $(form).trigger "item.#{method}", [data, textStatus, jqXHR]

  return false # don't submit the form let the ajax do the talking
