
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { HttpCode } from 'src/common/enums/enums';
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
            status: HttpCode.CREATED,
        });
    } catch (err: any) {
        return new NextResponse(err.message, {
            status: HttpCode.INTERNAL_SERVER_ERROR,
        });
    }
};
