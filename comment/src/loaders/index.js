import DataLoader from 'dataloader';
import { getComments } from './comment';

export default () => ({
  comments: new DataLoader(getComments),
});
