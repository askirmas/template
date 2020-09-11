import mongoose from 'mongoose'

export {
  set,
  start,
  stop,
}

function set(opts: Record<string, unknown>) {
  for (const key in opts)
    mongoose.set(key, opts[key])
  return mongoose
}

function start(url: string, config: mongoose.ConnectionOptions = {}) {
  console.info('DB connection starting')
  return mongoose.connect(
    url,
    config
  )
}

function stop() {
  console.info('DB connection Stopping')
  return mongoose.connection.close()
  .then(() => console.info('DB connection stopped'))
  .catch(err => (console.info('DB connection stop error', err), err))
}
