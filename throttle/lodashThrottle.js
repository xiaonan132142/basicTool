let lodashThrottle = {
  throttle(method, context) {
    clearTimeout(method.tId)
    method.tId = setTimeout(function() {
      method.call(context)
    }, 3000)
  },
}

export default lodashThrottle
