import { SheetRepository } from '@/app/api/repositories/sheet-repository'

export const getAllSheets = async () => {

    const sheetsRepository = new SheetRepository();

    const { data, total }: any = await sheetsRepository.findAllSheets();

    return { data, total }
}
