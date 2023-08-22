import { connectToDB } from '@/utils/database'
import Sheet from '@/models/sheet'
import { getServerSession } from 'next-auth'
import { options } from '../auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export const GET = async () => {

    // API Protection
    const session = await getServerSession(options);
    if (!session?.user) return redirect('/denied');

    try {

        await connectToDB()

        const sheets = await Sheet.find({}).populate(
            'creator'
        )

        return new Response(JSON.stringify(sheets), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to fetch all sheets', {
            status: 500,
        });
    }
}