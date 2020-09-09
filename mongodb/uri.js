import $default from "./uri.json"

// type defOpts = typeof $default

// /**@check https://www.npmjs.com/package/mongo-uri-builder */
// export type MongoUriObject = Partial<
//   defOpts
//   & Record<"username"|"password", string>
// >

export {
  getUrl
}

function getUrl(opts) {
// function getUrl(opts?: MongoUriObject) {
  const {
    username = "",
    password = "",
    host,
    port = "",
    database = "",
    ...options
  } = {...$default, ...opts}
  

  return `mongodb://${
    username && password
    ? `${username}:${password}@` 
    : ""
  }${
    host
  }${
    port ? `:${port}` : ""
  }/${
    database
  }?${
    //@ts-ignore
    new URLSearchParams(options)
  }`
}