import { Heading } from '@components/primitives/Heading';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => (
  <header style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>
      <Heading level={1} style={{ margin: 0 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
          {title}
        </Link>
      </Heading>
    </div>
  </header>
);
