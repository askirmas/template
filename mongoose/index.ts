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
  return mongoose.connect(
    url,
    config
  )
}

function stop() {
  return mongoose.connection.close()
}
