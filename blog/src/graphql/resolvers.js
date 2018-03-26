export default {
  Query: {
    blog: (_, { id }, { loaders }) => loaders.blogs.load(id),
  },
};
