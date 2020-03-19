/** @jsx jsx */
/* eslint-disable */

import { css, jsx } from '@emotion/core';

import React from 'react';
import { Box } from '@rebass/grid';
import { Link } from 'gatsby';

import Head from 'components/head';
import Layout from 'components/layout';

import HeroSection from 'components/hero';
import Logo from 'components/logo';

import { mq } from 'styles/breakpoints';
import { fontFamily } from 'styles/text.css';

let layoutWrapper = css`
  background-color: #0e207d;
`;

let textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: transparent;
  padding: 3rem;
  ${mq.tablet} {
    max-width: 30%;
  }
`;

let h2Styling = css`
  color: #feeccb;
  font-size: 1.15rem;
  margin-top: 2rem;
  ${fontFamily.poppins};
`;

const Index = ({ data }) => {
  const posts = data.wpgraphql.posts.edges.map(edge => edge.node);
  console.log(posts)
  return (
    <Layout css={layoutWrapper}>
      <Head siteTitle="Wellmade" siteDescription="Driving profitable growth" />
      <HeroSection>
      <Box css={textWrapper} width={0.8} m="auto">
        <Logo />
        <h2 css={h2Styling}>Digital Consultancy | Innovation Lab</h2>
      </Box>
      </HeroSection>
      {posts.map(post => (
        <Link to={post.slug} key={post.slug}>{post.title}</Link>
      ))}
    </Layout>
)};

Index.propTypes = {};

export default Index;

export const query = graphql`
  query homePosts {
    wpgraphql {
      posts {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  }
`
