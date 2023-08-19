import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

import User from '@/models/user';
import { connectToDB } from '@/utils/database';

interface User {
    _id: string;
    role: string;
    email: string;
}

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // Read more about credentials & authorize here https://next-auth.js.org/configuration/providers/credentials
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: {
        //             label: 'Email:',
        //             type: "email",
        //             placeholder: "your-email"
        //         },
        //         password: {
        //             label: "Password",
        //             type: "password",
        //             placeholder: "your-password"
        //         }
        //     },

        //     async authorize(credentials) {
        //         // TODO :: implement login functionality here 
        //         const user = { id: "28", name: "Jareer", password: "nextauth" }

        //         if (credentials?.username === user.name && credentials?.password === user.password) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // }),
    ],

    callbacks: {

        async session({ session }) {

            const sessionUser = await User.findOne({
                email: session?.user?.email,
            });

            if (sessionUser) {
                if (!session.user) {
                    session.user = {} as User;
                }
                session.user.id = sessionUser._id.toString();
                session.user.role = sessionUser.role;
            }

            return session;
        },

        async signIn({ profile, account }) {

            try {
                await connectToDB()

                // check if a user already exists
                const userExists = await User.findOne({
                    email: profile?.email,
                })

                // if not create a new user and save it to the database
                if (!userExists) {
                    await User.create({
                        email: profile?.email,
                        username: profile?.name.replace(' ', '').toLowerCase(),
                        image: profile?.picture,
                        provider: account?.provider,
                    });
                }
                return true


            } catch (error) {
                console.log(error.message);
                return false
            }
        }

    }
}