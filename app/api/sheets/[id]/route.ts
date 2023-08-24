import { connectToDB } from '@/utils/database';
import Sheet from '@/models/sheet';

// GET (read the request)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const sheet = await Sheet.findById(params.id).populate(
            'creator'
        );

        if (!sheet)
            return new Response('Sheet not found', { status: 404 });

        return new Response(JSON.stringify(sheet), {
            status: 200,
        });
    } catch (error) {
        return new Response('Failed to fetch sheet', {
            status: 500,
        });
    }
};

// PATCH (update)
export const PATCH = async (request, { params }) => {
    const { name, amount, startDate, endDate } = await request.json();

    try {
        await connectToDB();

        const existingSheet = await Sheet.findById(params.id);

        if (!existingSheet)
            return new Response('Sheet not found', { status: 404 });

        existingSheet.name = name;
        existingSheet.amount = amount;
        existingSheet.startDate = startDate;
        existingSheet.endDate = endDate;

        await existingSheet.save();

        return new Response(JSON.stringify(existingSheet), {
            status: 200,
        });
    } catch (error) {
        return new Response('Failed to update sheet', {
            status: 500,
        });
    }
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Sheet.findByIdAndRemove(params.id);

        return new Response('Sheet deleted successfully', {
            status: 200,
        });
    } catch (error) {
        return new Response('Failed to delete prompt', {
            status: 500,
        });
    }
};
