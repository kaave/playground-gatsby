import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage } }) =>
  createPage({
    path: '/using-dsg',
    component: require.resolve('../../templates/using-dsg.tsx'),
    context: {},
  });
