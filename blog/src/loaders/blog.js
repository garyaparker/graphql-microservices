import mockBlogs from './mock-data';

// Symbolizes some asynchronous operation
export const getBlogs = ids => Promise.resolve(mockBlogs.filter(blog => ids.includes(blog.id)));

export const searchBlogs = term => {};
