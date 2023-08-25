import { mergeResolvers } from '@graphql-tools/merge'

import sheets from './sheets';

const allResolvers = [] as any;

const modules = [sheets];
modules.forEach((module) => {
    allResolvers.push(module);
});

// stitching
const resolvers = mergeResolvers(allResolvers);;

export default resolvers