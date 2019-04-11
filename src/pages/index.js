 /** @jsx jsx */
/* eslint-disable */

import { css, jsx } from '@emotion/core';

import React from 'react';
import { Box } from '@rebass/grid';

import Head from 'components/head';
import Layout from 'components/layout';

import HeroSection from 'components/hero';

import { mq } from 'styles/breakpoints';

let textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.35);
  padding: 3rem;
`;

let h1Styling = css`
  font-family: 'Righteous';
  font-size: 5rem;
  -webkit-text-stroke: 1px white;
  color: #e87e0d;
  margin-bottom: 2rem;

  ${mq.tablet} {
    font-size: 12rem;
    -webkit-text-stroke: 2px white;
  }
`;

let h2Styling = css`
  color: white;
  font-size: 2.5rem;
  -webkit-text-stroke: 0.75px white;
  ${mq.tablet} {
    font-size: 5rem;
  }
`;

const Index = () => (
  <Layout>
    <Head siteTitle="WellMade" siteDescription="Driving profitable growth" />
    <HeroSection>
    <Box css={textWrapper} width={0.8} m="auto">
      <h1 css={h1Styling}>wellmade</h1>
      <h2 css={h2Styling}>Driving profitable growth through digital innovation</h2>
    </Box>
    </HeroSection>
  </Layout>
);

Index.propTypes = {};

export default Index;
