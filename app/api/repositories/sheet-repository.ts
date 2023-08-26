import Sheet from "@/models/sheet";
import { connectToDB } from "@/utils/database";
class SheetRepository {

    async findAllSheets() {

        try {
            await connectToDB()

            const data = await Sheet.find({})

            const total = data.length;

            return { data, total }

        } catch (error: any) {
            console.log(error.message);
        }
    }
}

export { SheetRepository }