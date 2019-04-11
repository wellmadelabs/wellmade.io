/*
 * Adapted from styled-system, which rebassjs/grid uses.
 * See:
 * 1. https://github.com/jxnblk/styled-system/blob/master/docs/api.md#breakpoints
 * 2. https://emotion.sh/docs/media-queries
 */
const breakpoints = ['40em', '52em', '64em'];

export const mq = {
  tablet: `@media screen and (min-width: ${breakpoints[0]})`,
  desktop: `@media screen and (min-width: ${breakpoints[1]})`,
  widescreen: `@media screen and (min-width: ${breakpoints[2]})`,
};
