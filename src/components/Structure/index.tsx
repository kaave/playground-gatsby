import '@styles/index.scss';
import React from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Structure = ({ children }: Props) => <div>{children}</div>;
