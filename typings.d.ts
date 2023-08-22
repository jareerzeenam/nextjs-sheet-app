export interface Sheet {
    _id?: string
    name: string
    amount: string
    startDate: string
    endDate: string
    creator: {
        email: string
    }
}