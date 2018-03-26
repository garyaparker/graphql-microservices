import mockComments from './mock-data';

// Symbolizes some asynchronous operation
export const getComments = ids => Promise.resolve(mockComments.filter(blog => ids.includes(blog.id)));
