import DataLoader from 'dataloader';
import mockPosts from './mock-data';

// Symbolizes some asynchronous operation
export const getPosts = ids => Promise.resolve(mockPosts.filter(post => ids.includes(post.id)));
