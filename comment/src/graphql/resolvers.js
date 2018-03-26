export default {
  Query: {
    comment: (_, { id }, { loaders }) => loaders.comments.load(id),
  },
};
