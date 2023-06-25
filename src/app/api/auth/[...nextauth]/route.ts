import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// import connect from '@/utils/db';
// import User from '@/models/User';

import bcrypt from 'bcryptjs';
import connect from 'src/utils/db';
import User from 'src/models/User';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials: { email: string, password: string }) {
                await connect();

                try {
                    const user = await User.findOne({ email: credentials?.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials?.password, user.password);
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error('wrong credentials');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch (error: any) {
                    throw new Error(error);
                }
            },
        }),
    ],
});

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
