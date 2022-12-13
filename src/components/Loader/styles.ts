import { keyframes } from '@stitches/react';
import { styled } from '../../styles/themes';

const ldsRing = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  }
});

export const StyledLoader = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '4rem',
  height: '4rem',

  div: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '6rem',
    height: '6rem',
    margin: '1rem',
    border: '0.8rem solid $black1',
    borderRadius: '50%',
    animation: `${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderColor: '$black1 transparent transparent transparent',

    '&:nth-child(1)': {
      animationDelay: '-0.45s',
    },

    '&:nth-child(2)': {
      animationDelay: '-0.3s',
    },

    '&:nth-child(3)': {
      animationDelay: '-0.15s',
    },
  },
});