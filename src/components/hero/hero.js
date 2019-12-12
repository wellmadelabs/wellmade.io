 /** @jsx jsx */
 /* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css, jsx } from '@emotion/core';

let heroWrapper = css`
  display: flex;
  width: 100%;
  text-align: center;
  position: relative;
  min-height: 100vh;
`;

const HeroSection = ({ children }) => (
  <div css={heroWrapper}>
   {children}
  </div>
);

/* eslint-disable */
export default props => (
  <StaticQuery
    query={graphql`
      query hero {
        background: file(
          name: { eq: "wellmade-splash" }
          extension: { eq: "jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, grayscale: false) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <HeroSection data={data} {...props} />}
  />
);

HeroSection.propTypes = {
  children: PropTypes.node,
};
