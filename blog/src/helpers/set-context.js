import getLoaders from '../loaders';

export default (req, res, next) => {
  req.context = { loaders: getLoaders(), blog: true };
  next();
};
