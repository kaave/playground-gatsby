import { StandardLayout } from '../layouts/Standard';
import * as classes from './index.module.scss';
import { Meta } from '@components/widgets/Meta';
import { Routes } from '@gen/Routes';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

export const Index = () => (
  <StandardLayout>
    <Meta title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      className={classes.StaticImage}
      src="../../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
    />
    <ul>
      <li>
        <Link to={Routes.UsingSsr}>Go to &quot;Using SSR&quot;</Link>
      </li>
      <li>
        <AniLink paintDrip duration={1} to={Routes.UsingSsr}>
          Go to &quot;Using SSR&quot; with Transition
        </AniLink>
      </li>
      <li>
        <Link to="/using-dsg">Go to &quot;Using DSG&quot;</Link>
      </li>
    </ul>
  </StandardLayout>
);
