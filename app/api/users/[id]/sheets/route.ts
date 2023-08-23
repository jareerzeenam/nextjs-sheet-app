import { connectToDB } from '@/utils/database'
import Sheet from '@/models/sheet'

export const GET = async (request, { params }) => {

    try {

        await connectToDB()

        const sheets = await Sheet.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(sheets), {
            status: 200,
        });

    } catch (error) {

        return new Response('Failed to fetch sheets', {
            status: 500,
        });
    }
}