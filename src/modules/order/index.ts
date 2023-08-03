import { readFileSync } from "fs"
import { resolve } from "path"
import resolvers from "./resolvers"

const schema = readFileSync(
  resolve("src", "modules", "order/schema.gql"),
  "utf-8"
)

export default {
  resolvers,
  typeDefs: schema,
}
