const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const di = require('./utils/di');
const schema = require('./graphql');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const PORT = 3001;
const mongodburi = process.env.MONGO_URL;

MongoClient.connect(mongodburi, { useNewUrlParser: true }).then(client => {
	try {
		di.set('mongo', client.db('grapql'));

		app.use(
			'/graphql',
			graphqlHTTP({
				schema,
				graphiql: true,
			}),
		);

		console.log('Start Server at', PORT);
		app.listen(PORT);
	} catch (error) {
		console.log(error.stack);
	}
});
