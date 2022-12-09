import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      white0: '#FFFFFF',
      white1: '#F2EFE9',
      white2: '#E8E7EE',
      gray1: '#8E89A9',
      gray2: '#48455F',
      black1: '#24222F',
      black2: '#121118',
      red1: '#EA5666',
      shadow: '0 2px 10px hsl(0 0% 9.0%)'
    },
    border: {
      radius: '20px',
    },
  },
});