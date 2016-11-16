class @Item

  constructor: (document) ->
    alert "what the fuck dude"
    $(document).page_init(@)

    # @role       = new Roles(@)
    @reconcilor = new Reconcilor(@)
    @listner    = new Listener(@)

    console.log "load.#{$.page_scope()}"
    $(document).trigger "load.#{$.page_scope()}"
