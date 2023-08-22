import { connectToDB } from '@/utils/database'
import Sheet from '@/models/sheet'
import { getServerSession } from 'next-auth'
import { options } from '../../auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export const POST = async (req) => {

    // API Protection
    const session = await getServerSession(options);
    if (!session?.user) return redirect('/denied');

    const { name, amount, startDate, endDate, creator } = await req.json();

    try {
        await connectToDB();

        const newSheet = new Sheet({
            name,
            amount,
            startDate,
            endDate,
            creator
        })

        await newSheet.save();

        return new Response(JSON.stringify(newSheet), {
            status: 201,
        });

    } catch (error) {
        return new Response('Failed to create a new sheet', {
            status: 500,
        });
    }

}