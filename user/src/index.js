import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './graphql/schema';
import setContext from './helpers/set-context';

const app = express();

app.use(setContext);
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema, context: req.context })));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3003);
