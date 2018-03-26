import DataLoader from 'dataloader';
import { getPosts } from './post';

export default () => ({
  posts: new DataLoader(getPosts),
});
