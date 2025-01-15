import express from 'express';
import Apollo from 'apollo-server-express';
import db from './config/connection.js';
import path from 'path';

import schemas from './schemas/index.js'
import Playground from 'apollo-server-core/dist/plugin/landingPage/graphqlPlayground/index.js';

const { ApolloServer } = Apollo;
const { typeDefs, resolvers } = schemas;
const { ApolloServerPluginLandingPageGraphQLPlayground } = Playground;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startServer = async () => {
    // create a new Apollo server and pass in our schema data
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins : [ApolloServerPluginLandingPageGraphQLPlayground({})],
    });

  // Start the Apollo server
    await server.start();

  // integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app });
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}


app.use(express.static('public'));

// builds client
// if (process.env.NODE_ENV === 'production') {
  //     app.use(express.static(path.join(__dirname, '../client/build')));
  // }

  // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../client/build/index.html'));
    // });
    
db.once('open', () => {
    app.listen(PORT, () => 
        console.log(`🌍 connected on localhost${PORT}`
    ));
    startServer();
});

