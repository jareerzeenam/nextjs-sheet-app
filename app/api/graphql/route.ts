import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

import resolvers from './schema/resolvers'
import typeDefs from './schema/typeDefs'




const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server as any, {
    // context: async req => ({ req }),
    context: async () => {
        const session = await getServerSession(options);

        return {
            creator: session?.user.id,
            role: session?.user.role
        }
    },
});

// more reference https://www.npmjs.com/package/@as-integrations/next?activeTab=readme

/**
 * Refer https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/ for apollo client 
 */

export { handler as GET, handler as POST };