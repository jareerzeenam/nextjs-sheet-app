import { createSheet, deleteSheet, getAllSheets, updateSheet } from '@/app/api/services/sheets'

const sheets = {
    Query: {
        hello: () => "Hello World!",

        getAllSheets: async () => getAllSheets()
    },

    Mutation: {
        createSheet: async (_, { sheet }, { role, creator }) =>
            createSheet({ ...sheet, role, creator }),

        updateSheet: async (_, { id, sheet }, { role, creator }) =>
            updateSheet({ id, ...sheet, role, creator }),

        deleteSheet: async (_, { id }, { role, creator }) =>
            deleteSheet({ id, role, creator }),
    }
};

export default sheets;