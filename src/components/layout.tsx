/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import Nav from './nav';
import Footer from './footer';
import './layout.css';

type Props = {
  children: ReactNode;
  lastSchedule: string;
}
const Layout = ({ children, lastSchedule }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Nav lastSchedule={lastSchedule} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Yu Gothic";
    src: local("Yu Gothic Medium");
    font-weight: 400;
  }
  @font-face {
    font-family: "Yu Gothic";
    src: local("Yu Gothic Bold");
    font-weight: bold;
  }
  html, body {
    margin: 0;
    position: relative;
  }
  body {
    overflow: auto;
    font-size: 62.5%;
    color: #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, "Yu Gothic", YuGothic, sans-serif;
    background-color: #f9f9fa;
  }
`;
