import mongoose from 'mongoose';
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

    async find(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new Error("Invalid Id");

        return await Sheet.findById(id).exec();
    }


    async create(payload) {

        const { name, startDate, endDate, amount, creator } = payload

        try {
            const sheet = new Sheet({ name, startDate, endDate, amount, creator });
            await sheet.save();
            return sheet;
        } catch (error) {
            console.log(error.message);
        }
    }

    async update(payload) {
        const { id, name, startDate, endDate, amount } = payload

        if (!mongoose.Types.ObjectId.isValid(id))
            throw new Error("Invalid Id");

        const sheet = await Sheet.findByIdAndUpdate(
            id,
            {
                name,
                amount,
                startDate,
                endDate,
            },
            {
                new: true,
            }
        );

        return sheet;
    }

    async delete(id: string) {
        if (!mongoose?.Types.ObjectId.isValid(id))
            throw new Error('Invalid Id');

        await Sheet.findByIdAndDelete(id);

        return 'Sheet Deleted Successfully!';
    }
}

export { SheetRepository }