import React from 'react';

type Props = {
  copyrightYear?: number;
};

export const Footer = ({ copyrightYear = new Date().getFullYear() }: Props) => (
  <footer style={{ marginTop: `2rem` }}>
    © {copyrightYear}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
);
