const { mergeTypeDefs } = require('@graphql-tools/merge');

import sheets from './sheets';

const allTypeDefs = [];

const modules = [sheets];
modules.forEach((module) => {
    allTypeDefs.push(module);
});

const typeDefs = mergeTypeDefs(allTypeDefs);

export default typeDefs