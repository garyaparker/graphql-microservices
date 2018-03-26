export default {
  Query: {
    post: (_, { id }, { loaders }) => loaders.posts.load(id),
  },
};
