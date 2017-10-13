var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
var { makeExecutableSchema } = require('graphql-tools');
 
var typeDefs = [`
type user {
    id:ID
    name: String
    gender: String
}
 
type Query {
  allUser: [user]
}
 
schema {
  query: Query
}`];
 
var resolvers = {
  Query: {
    allUser(root) {
        let user = [{
            id: 1,
            name: 'john',
            gender: 'male'
        }]
        return user;
    }
  }
};
 
 
var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
