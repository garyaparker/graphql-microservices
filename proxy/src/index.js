import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import fetchSchema from './graphql/schema';

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress(async (req) => {
  const schema = await fetchSchema();
  return { schema, context: req.context };
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(3000);
