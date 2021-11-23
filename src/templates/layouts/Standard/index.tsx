import { Header } from '../../../components/widgets/Header';
import { Footer } from '@components/widgets/Footer';
import { useSiteMetaData } from '@contexts/siteMetaData';
import { Bootstrap } from '@templates/layouts/Bootstrap';
import React from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const StandardLayout = ({ children }: Props) => (
  <Bootstrap>
    <Inner>{children}</Inner>
  </Bootstrap>
);

const Inner = ({ children }: Props) => {
  const siteData = useSiteMetaData();

  return (
    <>
      <Header siteTitle={siteData?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
