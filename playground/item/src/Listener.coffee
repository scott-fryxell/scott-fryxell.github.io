class @Listener

  constructor (item) ->
    @events = new EventSource('/events')

    $(@events).on "message", (event) =>
      console.info 'message from /events', event.data

    $(@events).on "open", (event) =>
      console.info 'bound to events server'

    $(@events).on "error", (event) =>
      console.error 'server event error:', event.data

    # # TODO: need to get at cache throug item class
    # @events.addEventListener "page.save", (event) =>
    #   console.info 'refreshing appcash ', event.data
    #   @app_cache.update()
    #   @app_cache.swapCache()
    #
    # # TODO: need to get at cache throug item class
    # @events.addEventListener "item.save", (event) =>
    #   console.info 'refreshing appcash ', event.data
    #   @@app_cache.update()
    #   @app_cache.swapCache()
