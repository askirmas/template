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
  } = mergeParams($default, opts)
  

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

function mergeParams(p1, p2) {
  const $return = {...p2}
  for (const key in p1)
    if (!$return[key])
      $return[key] = p1[key]
  
  return $return
}