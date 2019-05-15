import jQuery from 'jquery'
;(function($) {
  $.websocket = function(options) {
    var defaults = {
      domain: '',
      port: 7080,
      protocol: 'websocket',
    }
    var opts = $.extend(defaults, options)
    var szServer = 'ws://' + opts.domain + ':' + opts.port + '/' + opts.protocol
    var socket = null
    var bOpen = false
    var messageevent = {
      onInit: function() {
        if (!('WebSocket' in window) && !('MozWebSocket' in window)) {
          return false
        }
        if ('MozWebSocket' in window) {
          socket = new window.MozWebSocket(szServer)
        } else {
          socket = new WebSocket(szServer)
          console.log('websocket 开始连接')
        }
        if (opts.onInit) {
          opts.onInit()
        }
      },
      onOpen: function(event) {
        bOpen = true
        if (opts.onOpen) {
          console.log('websocket 连接成功')
          opts.onOpen(event)
        }
      },
      onSend: function(msg) {
        if (opts.onSend) {
          opts.onSend(msg)
        }
        if (socket.readyState === 1) {
          socket.send(msg)
        } else {
          console.log(123456)
        }
      },
      onMessage: function(msg) {
        opts.onMessage(msg)
      },
      onError: function(event) {
        if (opts.onError) {
          opts.onError(event)
          console.log('websocket 连接发生错误')
        }
      },
      onClose: function(event) {
        if (opts.onClose) {
          opts.onClose(event)
        }
        if (socket.close() != null) {
          socket = null
        }
      },
    }
    window.onbeforeunload = function() {
      messageevent.onClose()
    }
    messageevent.onInit()
    socket.onopen = messageevent.onOpen
    socket.onmessage = messageevent.onMessage
    socket.onerror = messageevent.onError
    socket.onclose = messageevent.onClose
    this.send = function(pData) {
      if (bOpen == false) {
        return false
      }
      messageevent.onSend(pData)
      return true
    }
    this.close = function() {
      messageevent.onClose()
    }

    this.openWebSocket = function(account) {
      var messageObject = {}
      messageObject.account = account
      messageObject.type = '1'
      messageevent.onSend(JSON.stringify(messageObject))
    }
    this.closeWebSocket = function(account) {
      var messageObject = {}
      messageObject.account = account
      messageObject.type = '2'
      messageevent.onSend(JSON.stringify(messageObject))
    }
    return this
  }
})(jQuery)
