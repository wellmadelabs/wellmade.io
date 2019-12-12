 /** @jsx jsx */
/* eslint-disable */

import { css, jsx } from '@emotion/core';

import React from 'react';
import { Box } from '@rebass/grid';

import Head from 'components/head';
import Layout from 'components/layout';

import HeroSection from 'components/hero';
import Logo from 'components/logo';

import { mq } from 'styles/breakpoints';

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
  font-size: 1.5rem;
  margin-top: 2rem;

  ${mq.tablet} {
    font-size: 1.5rem;
  }
`;

const Index = () => (
  <Layout css={layoutWrapper}>
    <Head siteTitle="Wellmade" siteDescription="Driving profitable growth" />
    <HeroSection>
    <Box css={textWrapper} width={0.8} m="auto">
      <Logo />
      <h2 css={h2Styling}>Digital Consultancy | Innovation Lab</h2>
    </Box>
    </HeroSection>
  </Layout>
);

Index.propTypes = {};

export default Index;
