import { RoutesProvider } from '@contexts/routes';
import { SiteMetaDataProvider } from '@contexts/siteMetaData';
import '@styles/index.scss';
import React from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react/jsx-no-useless-fragment
export const Bootstrap = ({ children }: Props) => (
  <RoutesProvider>
    <SiteMetaDataProvider>{children}</SiteMetaDataProvider>
  </RoutesProvider>
);
