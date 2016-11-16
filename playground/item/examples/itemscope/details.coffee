# an example of how you can bind functionality to all items of a semantic type
$(document).on 'click', 'details[itemscope]', ->

  # console.debug('getting info')
  jQuery.ajax
    url:$(@).attr('itemid'),
    headers: {retrieve_as_data: "true"}
    success: (data) =>
      $(@).unbind('click')
      $(@).append(data)
      # console.debug('element', @)
      new Items(@)
      $(@).find('time').timeago()

    statusCode:
      401:=>
        $(@).trigger "401"
        console.debug("you don't have rights to view this resource")
