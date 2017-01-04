class @Item

  constructor: (document) ->
    
    $(document).page_init(@)

    # @role       = new Roles(@)
    @reconcilor = new Reconcilor(@)
    @listner    = new Listener(@)

    console.log "load.#{$.page_scope()}"
    $(document).trigger "load.#{$.page_scope()}"
