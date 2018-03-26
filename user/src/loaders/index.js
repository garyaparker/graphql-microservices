import DataLoader from 'dataloader';
import { getUsers } from './user';

export default () => ({
  users: new DataLoader(getUsers),
});
