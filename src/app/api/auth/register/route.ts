// import User from '@/models/User';
// import connect from '@/utils/db.js';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from 'src/models/User';
import connect from 'src/utils/db';


export const POST = async (request: Request) => {
    const { name, email, password } = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse('User has been created', {
            status: 201,
        });
    } catch (err: any) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
