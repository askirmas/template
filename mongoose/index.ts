import mongoose from 'mongoose'

export {
  set,
  start,
  clear,
  stop
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

async function clear() {
  for (const collection of Object.values(mongoose.connection.collections))
    await collection.deleteMany({})
  return mongoose
}

function stop() {
  return mongoose.connection.close()
}

