import { getAllSheets } from '@/app/api/services/sheets'

const sheets = {
    Query: {
        hello: () => "Hello World!",

        getAllSheets: async () => getAllSheets()
    },
};

export default sheets