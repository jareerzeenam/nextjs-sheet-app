// reference https://javascript.plainenglish.io/using-apollo-server-with-nextjs-13-app-dir-part-1-google-auth-with-nextauth-prisma-ca242c92599e
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

import resolvers from './schema/resolvers'
import typeDefs from './schema/typeDefs'

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server as any, {
    context: async req => ({ req }),
});

// more reference https://www.npmjs.com/package/@as-integrations/next?activeTab=readme

export { handler as GET, handler as POST };