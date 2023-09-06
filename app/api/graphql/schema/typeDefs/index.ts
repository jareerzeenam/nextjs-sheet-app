const { mergeTypeDefs } = require('@graphql-tools/merge');

import core from './core';
import sheets from './sheets';

const allTypeDefs = [] as any;

const modules = [core, sheets];
modules.forEach((module) => {
    allTypeDefs.push(module);
});

const typeDefs = mergeTypeDefs(allTypeDefs);

export default typeDefs