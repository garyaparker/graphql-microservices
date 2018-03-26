import DataLoader from 'dataloader';
import { getBlogs } from './blog';

export default () => ({
  blogs: new DataLoader(getBlogs),
});
