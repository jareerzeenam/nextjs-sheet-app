// https://authjs.dev/getting-started/typescript#module-augmentation
import { DefaultSession, DefaultUser } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string,
            email: string,
            image: string
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: string,
    }

    interface Profile {
        name?: string;
        picture?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string,
        role: string,
    }
}