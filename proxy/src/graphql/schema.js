import { introspectSchema, makeRemoteExecutableSchema, mergeSchemas } from 'graphql-tools';
import { createApolloFetch } from 'apollo-fetch';
import linkTypeDefs from './link-type-defs.graphql';
import resolvers from './resolvers';

const fetchSchema = async (uri) => {
  const fetcher = createApolloFetch({ uri });
  return makeRemoteExecutableSchema({ fetcher, schema: await introspectSchema(fetcher) });
};

export default async () => {
  const graphqlEndpoints = [
    'http://localhost:3001/graphql',
    'http://localhost:3002/graphql',
    'http://localhost:3003/graphql',
    'http://localhost:3004/graphql',
  ];

  const remoteSchemas = await Promise.all(graphqlEndpoints.map(fetchSchema));
  const schemas = [linkTypeDefs, ...remoteSchemas];

  return mergeSchemas({ schemas, resolvers });
};
