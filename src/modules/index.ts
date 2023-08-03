import { makeExecutableSchema } from '@graphql-tools/schema';
import admin from './admin';
import food from './food';
import order from './order';
import restourant from './restourant';

export default makeExecutableSchema({
	typeDefs: [admin.typeDefs, restourant.typeDefs, food.typeDefs, order.typeDefs],
	resolvers: [admin.resolvers, restourant.resolvers, food.resolvers, order.resolvers],
});
