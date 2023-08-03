import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import http from 'http';
import AppDataSource from './config/db';
import schema from './modules/index';

const app = express();
const httpServer = http.createServer(app);
AppDataSource.initialize()
	.then(() => console.log('db connected'))
	.catch(err => console.log(err));

!(async function () {
	const server = new ApolloServer({
		schema,
		csrfPrevention: false,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();

	app.use(
		'/graphql',
		graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }),
		cors<cors.CorsRequest>({
			origin: 'http://localhost:5173',
		}),
		express.json(),
		expressMiddleware(server)
	);

	app.use(cors({ origin: 'http://localhost:5173' }));
	app.use('/', (req, res) => {
		res.end('ok');
	});

	await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
	console.log(`🚀 Server ready at http://localhost:4000/`);
})();

