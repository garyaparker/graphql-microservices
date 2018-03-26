export default mergeInfo => ({
  Post: {
    blog: {
      fragment: 'fragment PostBlogFragment on Post { blogId }',
      resolve: (parent, args, context, info) => (
        mergeInfo.delegate('query', 'blog', { id: parent.blogId }, context, info)
      ),
    },
    comments: {
      fragment: 'fragment PostCommentsFragment on Post { commentIds }',
      resolve: (parent, args, context, info) => (
        parent.commentIds.map(id => mergeInfo.delegate('query', 'comment', { id }, context, info))
      ),
    },
  },
  Blog: {
    posts: {
      fragment: 'fragment BlogPostsFragment on Blog { postIds }',
      resolve: (parent, args, context, info) => (
        parent.postIds.map(id => mergeInfo.delegate('query', 'post', { id }, context, info))
      ),
    },
    author: {
      fragment: 'fragment BlogAuthorFragment on Blog { authorId }',
      resolve: (parent, args, context, info) => (
        mergeInfo.delegate('query', 'user', { id: parent.authorId }, context, info)
      ),
    },
    contributers: {
      fragment: 'fragment BlogContributersFragment on Blog { contributerIds }',
      resolve: (parent, args, context, info) => (
        parent.contributerIds.map(id => mergeInfo.delegate('query', 'user', { id }, context, info))
      ),
    },
  },
  Comment: {
    author: {
      fragment: 'fragment CommentAuthorFragment on Comment { authorId }',
      resolve: (parent, args, context, info) => (
        mergeInfo.delegate('query', 'user', { id: parent.authorId }, context, info)
      ),
    },
  },
  User: {
    blogsAuthored: {
      fragment: 'fragment UserBlogsAuthoredFragment on User { blogsAuthoredIds }',
      resolve: (parent, args, context, info) => (
        parent.blogsAuthoredIds.map(id => mergeInfo.delegate('query', 'blog', { id }, context, info))
      ),
    },
    blogsContributed: {
      fragment: 'fragment UserBlogsContributedFragment on User { blogsContributedIds }',
      resolve: (parent, args, context, info) => (
        parent.blogsContributedIds.map(id => mergeInfo.delegate('query', 'blog', { id }, context, info))
      ),
    },
  },
});
