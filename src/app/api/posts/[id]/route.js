import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    try {
        await connect();

        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new NextResponse('Post not found', { status: 500 });
    }
}
