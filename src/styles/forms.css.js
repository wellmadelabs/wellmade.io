/** @jsx jsx */
import { css } from '@emotion/core';

import { mq } from 'styles/breakpoints';
import { bgColor, border, textColor, textFormat } from 'styles/text.css';

export const inputField = (borderColor = 'black') => css`
  ${bgColor.white};
  ${border(borderColor, '2px')};
  box-shadow: none;
  border-radius: 0.5rem;
  width: 90%;
  margin: 0.5rem auto;
  font-size: 1rem;
  padding: 1rem;
  max-width: 800px;
  ${mq.tablet} {
    width: 80%;
    margin: 1rem auto;
    font-size: 1rem;
    padding: 1rem;
  }

  // Using disabled attrbute to show submitted emails
  &:disabled {
    ${textColor.green};
    ${border('green', '3px')};
    ${textFormat.bold};
  }

  &:disabled::placeholder {
    opacity: 1;
  }

  &:disabled + label {
    ${textFormat.bold};
    position: absolute;
    top: 40%;
    right: 10%;
    font-size: 1rem;
    ${mq.tablet} {
      font-size: 1.5rem;
      right: 15%;
    }
  }

  &:disabled + label::before {
    content: '✓';
    ${textColor.green};
  }

  &:active,
  &:focus,
  &:focus-within {
    outline: none;
  }
`;

export const smallInputField = css`
  ${inputField()};

  ${mq.desktop} {
    width: 40%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    max-width: 393px;
  }
`;

export const messageField = css`
  ${inputField()};
  height: 200px;
`;

export const addButton = css`
  ${bgColor.white};
  ${textColor.black};
  ${textFormat.bold};
  ${textFormat.upperCase};
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  ${mq.tablet} {
    padding: 2rem;
    font-size: 2rem;
  }
`;

export const submitButton = (
  color = 'white',
  colord = 'black',
  backgroundColor = 'red',
  backgroundColord = 'white',
  borderColor = 'red',
  drSubmit = ''
) => {
  const padding = drSubmit == '' ? '2rem 8rem' : '1rem 2rem';
  const margin = drSubmit == '' ? '0.5rem 0 1rem' : '2rem 0 1rem';
  const fontSize = drSubmit == '' ? '1rem' : '1.5rem';
  return css`
    ${bgColor[backgroundColor]};
    ${textColor[color]};
    ${textFormat.bold};
    ${textFormat.upperCase};
    ${border(borderColor, '2px')};
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: ${margin};
    padding: ${padding};
    font-size: ${fontSize};
    min-width: 90%;
    ${mq.tablet} {
      min-width: 80%;
      padding: 1rem;
      font-size: 1.75rem;
    }

    &:disabled {
      ${bgColor[backgroundColord]};
      ${textColor[colord]};
      cursor: not-allowed;
    }
  `;
};
