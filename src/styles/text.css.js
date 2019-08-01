import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { mq } from './breakpoints';
import { colors } from './variables.css';

export const fontFamily = {
  oswald: css`
    font-family: 'Oswald';
    font-weight: 500;
  `,
  vincent: css`
    font-family: 'Vincent', 'Roboto';
    font-weight: 400;
  `,
  roboto: css`
    font-family: 'Roboto';
    font-weight: 400;
  `,
};

export const bgColor = {
  gray: css`
    background: ${colors.gray};
  `,
  grayOpacityLow: css`
    background: ${colors.gray};
  `,
  offWhite: css`
    background: ${colors.offWhite};
  `,
  red: css`
    background: ${colors.red};
  `,
  white: css`
    background: ${colors.white};
  `,
  transparent: css`
    background: ${colors.transparent};
  `,
  black: css`
    background: ${colors.black};
  `,
};

export const bgWithOpacity = (opacity = '0.5') => css`
  background: rgba(${colors.grayRgb}, ${opacity});
`;

export const border = (color, width = '1px', style = 'solid') => css`
  border: ${width} ${style} ${colors[color]};
`;

export const textColor = {
  gray: css`
    color: ${colors.gray};
  `,
  green: css`
    color: green;
  `,
  red: css`
    color: ${colors.red};
  `,
  transparent: css`
    color: ${colors.transparent};
  `,
  white: css`
    color: ${colors.white};
  `,
  black: css`
    color: ${colors.black};
  `,
};

export const textFormat = {
  alignCenter: css`
    text-align: center;
  `,
  bold: css`
    font-weight: 700;
  `,
  headerBold: css`
    font-weight: 500;
  `,
  strikeThrough: css`
    text-decoration-line: line-through;
    text-decoration-color: ${colors.red};
  `,
  upperCase: css`
    text-transform: uppercase;
  `,
};

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1rem;

  ${mq.tablet} {
    font-size: 1.75rem;
  }
`;

export const BoldP = styled(P)`
  ${textFormat.bold};
`;

export const BoxP = styled(P)`
  font-size: 0.65rem;
  margin-top: 2rem;

  ${mq.tablet} {
    font-size: 0.75rem;
  }
  ${mq.desktop} {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
`;

export const StrikeSpan = styled.span`
  ${textFormat.strikeThrough};
`;

export const knockoutText = (color, strokeWidth) => {
  return css`
    ${textColor[color]};
    ${textFormat.upperCase};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: ${strokeWidth}px ${colors[color]};
    ${mq.tablet} {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: ${strokeWidth * 2.5}px ${colors[color]};
    }
  `;
};

export const whiteKnockoutText = knockoutText('white', 2);
export const redKnockoutText = knockoutText('red', 2);

export const menuText = css`
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.1;
`;
