import { buildSchemaSync } from "type-graphql";
import UsersResolver from "./resolvers/users.resolver";

const schema = buildSchemaSync({
  resolvers: [UsersResolver],
  emitSchemaFile: true
})

export default schema;
