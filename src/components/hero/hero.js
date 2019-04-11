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

let heroImg = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const HeroSection = ({ data, children }) => (
  <div css={heroWrapper}>
    <Img
      css={heroImg}
      style={{ position: 'absolute' }}
      fluid={data.background.childImageSharp.fluid}
    />
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
  data: PropTypes.shape({
    background: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node,
};
