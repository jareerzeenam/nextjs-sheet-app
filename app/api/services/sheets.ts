import { SheetRepository } from '@/app/api/repositories/sheet-repository'

export interface Payload {
    id: string
    name: string
    amount: number
    startDate: string
    endDate: string
    role?: string
    creator?: string
}

export const getAllSheets = async () => {

    const sheetsRepository = new SheetRepository();

    const { data, total }: any = await sheetsRepository.findAllSheets();

    return { data, total }
}

// Create Sheet
export const createSheet = async (payload: Payload) => {

    if (!(payload.role === 'Admin' || payload.role === "Owner")) {
        throw new Error("Un-Authenticated");
    }

    const sheetsRepository = new SheetRepository();

    const sheet = await sheetsRepository.create(payload);

    return sheet;
}

export const updateSheet = async (payload: Payload) => {

    if (!(payload.role === 'Admin' || payload.role === "Owner")) {
        throw new Error("Un-Authenticated");
    }

    const sheetsRepository = new SheetRepository();
    const sheet = await sheetsRepository.find(payload.id);

    if (!sheet) throw new Error("Sheet not found!");

    // Check if the sheet belongs to the user before deleting
    if (sheet.creator != payload.creator)
        throw new Error('This sheet does not belongs to you!');

    // Remove items from payload
    delete payload.role;
    delete payload.creator;

    const updatedSheet = await sheetsRepository.update(payload);
    return updatedSheet;
}

export const deleteSheet = async (payload) => {

    if (!(payload.role === 'Admin' || payload.role === "Owner")) {
        throw new Error("Un-Authenticated");
    }

    const sheetsRepository = new SheetRepository();
    const sheet = await sheetsRepository.find(payload.id);

    if (!sheet) throw new Error("Sheet not found!");

    // Check if the sheet belongs to the user before deleting
    if (sheet.creator != payload.creator)
        throw new Error('This sheet does not belongs to you!');

    const response = await sheetsRepository.delete(payload.id);

    return response;

}
