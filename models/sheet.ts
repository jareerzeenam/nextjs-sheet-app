import { Schema, model, models } from 'mongoose'

const SheetSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    amount: {
        type: Number,
        required: [true, 'The amount is required']
    },
    createdBy: {
        type: String
    },
    startDate: {
        type: Date,
        required: [true, 'The start date is required']
    },
    endDate: {
        type: Date,
        required: [true, 'The end date is required']
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

const Sheet = models.Sheet || model('Sheet', SheetSchema);

export default Sheet

