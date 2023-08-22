//  Server Action 
// This is not used anywhere yet

'use server';

import { Sheet } from '@/typings';
import { revalidateTag } from 'next/cache';

export const addSheetToDatabase = async (e: FormData) => {
    const name = e.get('name')?.toString();
    const amount = e.get('amount')?.toString();
    const startDate = e.get('startDate')?.toString();
    const endDate = e.get('endDate')?.toString();

    if (!name || !amount || !startDate || !endDate) return;

    const newSheet: Sheet = {
        name,
        amount,
        startDate,
        endDate,
    };

    // used full path http://localhost:3000/ due to Unhandled Runtime Error
    await fetch('http://localhost:3000/api/sheets/store', {
        method: 'POST',
        body: JSON.stringify(newSheet),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    revalidateTag('loadSheets');
};