import { introspectSchema, makeRemoteExecutableSchema, mergeSchemas } from 'graphql-tools';
import { createApolloFetch } from 'apollo-fetch';
import linkTypeDefs from './link-type-defs.graphql';
import resolvers from './resolvers';

export default async () => {
  const blogFetcher = createApolloFetch({ uri: 'http://localhost:3001/graphql' });
  const blogSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(blogFetcher),
    fetcher: blogFetcher,
  });

  const postFetcher = createApolloFetch({ uri: 'http://localhost:3002/graphql' });
  const postSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(postFetcher),
    fetcher: postFetcher,
  });

  const userFetcher = createApolloFetch({ uri: 'http://localhost:3003/graphql' });
  const userSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(userFetcher),
    fetcher: userFetcher,
  });

  const commentFetcher = createApolloFetch({ uri: 'http://localhost:3004/graphql' });
  const commentSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(commentFetcher),
    fetcher: commentFetcher,
  });

  return mergeSchemas({
    schemas: [blogSchema, postSchema, userSchema, commentSchema, linkTypeDefs],
    resolvers,
  });
};
