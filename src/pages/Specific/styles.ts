import { styled } from '../../styles/themes';

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Content = styled('main', {
  margin: '4rem 2rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  maxWidth: '1200px',
  width: '100%',

  '@media (min-width: 560px)': {
    margin: '2rem 4rem 0',
  },

  '@media (min-width: 1120px)': {
    margin: '2rem 10rem 0',
  },

  '@media (min-width: 1400px)': {
    margin: '2rem 6rem 0',
  },

  '@media (min-width: 1600px)': {
    margin: '2rem 8rem 0',
  },
});

export const Map = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '0 4rem',

  '@media (min-width: 1400px)': {
    padding: '0',
  }
});

export const ContainerMap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  width: '100%',
});

export const Chart = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  width: '100%',
  minHeight: '44rem',
  maxHeight: '44rem',

  overflowX: 'auto',
  overflowY: 'hidden',

  '& > .react-select-container': {
    alignSelf: 'flex-start',
    width: '100%'
  }
});

export const FiltersContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
});

export const Cards = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  width: '100%',
  padding: '0 4rem',

  '@media (min-width: 740px)': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },

  '@media (min-width: 1400px)': {
    padding: '0',
  },
});

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2rem',

  fontSize: '1.5rem',
  borderRadius: '10px',
  padding: '1rem',

  svg: {
    width: '5rem',
    height: '5rem',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  p: {
    '@media (min-width: 1180px)': {
      width: 'max-content',
    },
  }
});
