import { styled } from '@stitches/react';

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
});

export const Content = styled('main', {
  margin: '4rem 4rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  '@media (min-width: 560px)': {
    margin: '4rem 4rem 0',
  },

  '@media (min-width: 1120px)': {
    margin: '4rem 10rem 0',
  },

  '@media (min-width: 1400px)': {
    margin: '4rem 6rem 0',
  },
});

export const Maps = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  width: '100%',

  '@media (min-width: 1400px)': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
  }
});