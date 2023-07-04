import { NextResponse } from 'next/server';
import connect from 'src/utils/db';
import Post from 'src/models/Post';

export async function GET(request) {
    const url = new URL(request.url);
    const username = url.searchParams('username');
    console.log('username', username);
    try {
        await connect();

        const posts = await Post.find(username && { username });

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse('DB error', { status: 500 });
    }
}
