import { connectToDB } from '@/utils/database';
import Sheet from '@/models/sheet';

// GET (read the request)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompt = await Sheet.findById(params.id).populate(
            'creator'
        );

        if (!prompt)
            return new Response('Prompt not found', { status: 404 });

        return new Response(JSON.stringify(prompt), {
            status: 200,
        });
    } catch (error) {
        return new Response('Failed to fetch sheet', {
            status: 500,
        });
    }
};