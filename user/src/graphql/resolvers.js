export default {
  Query: {
    user: (_, { id }, { loaders }) => loaders.users.load(id),
  },
};
