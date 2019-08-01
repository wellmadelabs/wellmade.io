 /** @jsx jsx */
/* eslint-disable */

import { css, jsx } from '@emotion/core';

import React from 'react';
import { Box } from '@rebass/grid';

import Head from 'components/head';
import Layout from 'components/layout';

import HeroSection from 'components/hero';
import LeadForm from 'components/lead-submit-form';
import { mq } from 'styles/breakpoints';

let textWrapper = css`
  color: white;
  background: rgba(0, 0, 0, 0.45);
  margin: 0 auto;
  padding: 3rem;
`;

let logoStyling = css`
  font-family: 'Righteous';
  font-size: 3rem;
  -webkit-text-stroke: 1px white;
  color: #e87e0d;
  margin-bottom: 2rem;

  ${mq.tablet} {
    font-size: 12rem;
    -webkit-text-stroke: 2px white;
  }
`;

let h1Styling = css`
  color: white;
  font-size: 3.5rem;
  -webkit-text-stroke: 0.75px white;
  margin-bottom: 3rem;
`;

let h2Styling = css`
  color: white;
  font-size: 2.5rem;
  -webkit-text-stroke: 0.75px white;
  ${mq.tablet} {
    font-size: 5rem;
  }
`;

let pStyling = css`

`;

const Index = () => (
  <Layout>
    <Head siteTitle="WellMade" siteDescription="Driving profitable growth" />
    <HeroSection>
    <Box css={textWrapper} width={1}>
      <div css={logoStyling}>wellmade</div>
      <h1 css={h1Styling}>Discover Strategies to Grow Your Fitness Brand</h1>
      <h2 css={h2Styling}>Calculate the north star of your fitness studio in moments</h2>

      <LeadForm
        apiUrl="http://localhost:9000"
        setSubmitTrue={() => true}
      />

       <p>Knowing one number, your Customer Lifetime Value (CLV), is your first step to fundamentally change your growth and retention marketing efforts:</p>
      <ul>
        <li>Discover how much you can expect each new customer to spend</li>
        <li>Understand how much to spend on customer acquisition and retention efforts</li>
        <li>Make profit the #1 success metric for new marketing campaigns</li>
      </ul>
      <p>Calculating CLV in Mindbody Online (MBO) is hard. We’ve put in the sweat to make it easy for you.</p>
   </Box>
    </HeroSection>
  </Layout>
);

Index.propTypes = {};

export default Index;
