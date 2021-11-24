import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import React, { useMemo } from 'react';

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const Heading = ({ level = 2, ...rest }: Props) => {
  const Component = useMemo(() => `h${level}`, [level]);

  return <Component {...rest} />;
};
