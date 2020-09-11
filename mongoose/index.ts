import mongoose from 'mongoose'

export {
  set,
  start,
  stop,
  __clear
}

function set(opts: Record<string, string|boolean|Function>) {
  for (const key in opts)
    mongoose.set(key, opts[key])
  return mongoose
}

async function start(url: string, config: mongoose.ConnectionOptions = {}) {
  console.info('DB connecting')
  const connection = await mongoose.connect(
    url,
    config
  )
  console.info('DB connected')
  return connection
}

function stop() {
  console.info('DB connection stopping')
  return mongoose.connection.close()
  .then(() => console.info('DB connection stopped'))
  .catch(err => (console.info('DB connection stop error', err), err))
}

async function __clear() {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== "test")
    return
  for (const collection of Object.values(mongoose.connection.collections))
    await collection.deleteMany({})  
  return
}