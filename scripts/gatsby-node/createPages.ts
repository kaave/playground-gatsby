import type { GatsbyNode } from 'gatsby';

export const DsgPages = {
  UsingDsg: '/using-dsg',
} as const;

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage } }) =>
  createPage({
    path: DsgPages.UsingDsg,
    component: require.resolve('../../src/templates/using-dsg.tsx'),
    context: {},
  });
