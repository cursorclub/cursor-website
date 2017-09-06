import sharedWorker from 'shared-worker-loader!~plugins/sharedworker.js'


// Connect to our SharedWorker if the feature is available
let worker;
if (typeof SharedWorker !== 'undefined') {
  worker = new sharedWorker()
  worker.port.start()
}

export const mounted = (route) => function() {
  // Update local state when the worker informs us of changes to global state
  worker.port.addEventListener('message', ({ data }) => {
    if (data.route === route) {
      if (data.error) {
        this.error = data.error
      } else {
        this.data = data.result
      }
    }
  })
  worker.port.postMessage(route)
}

export default mounted
