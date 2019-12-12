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

 const Logo = ({ data, children }) => (
   <React.Fragment>
     <Img
       fluid={data.logo.childImageSharp.fluid}
     />
     {children}
   </React.Fragment>
 );

 /* eslint-disable */
 export default props => (
   <StaticQuery
     query={graphql`
       query logo {
         logo: file(
           name: { eq: "wellmade-logo-tan" }
           extension: { eq: "png" }
         ) {
           childImageSharp {
             fluid(maxWidth: 2000, grayscale: false) {
               ...GatsbyImageSharpFluid_withWebp
             }
           }
         }
       }
     `}
     render={data => <Logo data={data} {...props} />}
   />
 );

 Logo.propTypes = {
   data: PropTypes.shape({
     logo: PropTypes.shape({
       childImageSharp: PropTypes.shape({
         fluid: PropTypes.object.isRequired,
       }).isRequired,
     }).isRequired,
   }).isRequired,
   children: PropTypes.node,
 };
