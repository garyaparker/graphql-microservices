import { makeExecutableSchema, addResolveFunctionsToSchema } from 'graphql-tools';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });
addResolveFunctionsToSchema(schema, resolvers);

export default schema;
