import schema from "./opts.schema.json"

type P = (typeof schema)["properties"]

export type MongooseOpts = {
  [K in keyof P]
  : P[K] extends {"default": any}
  ? P[K]["default"]
  : P[K] extends {"examples": any[]}
  ? P[K]["examples"][number]
  : unknown
}