import { Heading } from '@components/primitives/Heading';
import { useRoutes } from '@contexts/routes';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const routes = useRoutes();

  return (
    <header>
      <div>
        <Heading level={1}>
          <Link to={routes.Index}>{title}</Link>
        </Heading>
      </div>
    </header>
  );
};
