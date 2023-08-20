import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
// import CredentialsProvider from 'next-auth/providers/credentials'
import { GithubProfile } from 'next-auth/providers/github'

import User from '@/models/user';
import { connectToDB } from '@/utils/database';

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            profile(profile: GithubProfile) {
                // console.log(profile);
                return {
                    ...profile,
                    role: profile.role,
                    id: profile.id.toString(),
                    image: profile.avatar_url
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // Read more about credentials & authorize here https://next-auth.js.org/configuration/providers/credentials (login with credentials)
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         username: {
        //             label: 'User Name:',
        //             type: "text",
        //             placeholder: "your-username"
        //         },
        //         password: {
        //             label: "Password",
        //             type: "password",
        //             placeholder: "your-password"
        //         }
        //     },

        //     async authorize(credentials) {
        //         // TODO :: implement login functionality here 
        //         const user = { id: "28", name: "Jareer", password: "nextauth", role: "Admin" }

        //         if (credentials?.username === user.name && credentials?.password === user.password) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // }),
    ],

    callbacks: {

        async jwt({ token, user }) {

            try {
                const dbUser = await User.findOne({
                    email: user?.email,
                });

                if (user) {
                    token.role = dbUser.role
                    token.id = dbUser._id.toString();
                }

                return token
            } catch (error) {
                console.log('ERROR :: ', (error as Error).message);
                return false;
            }
        },

        // If you want to use role in client components
        async session({ session, token }) {

            if (session?.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }

            return session;
        },

        async signIn({ profile, account }) {

            try {
                await connectToDB()

                const user = await User.findOne({
                    email: profile?.email
                });

                if (!user) {
                    await User.create({
                        email: profile?.email,
                        username: profile?.name?.replace(' ', '').toLowerCase(),
                        image: profile?.picture || profile?.image,
                        provider: account?.provider,
                    })
                }

                return true

            } catch (error) {
                console.log('ERROR :: ', (error as Error).message);
                return false
            }
        }

    }
}