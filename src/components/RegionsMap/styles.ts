import { styled } from '../../styles/themes';

export const Container = styled('div', {
  position: 'relative',
  fontSize: '1rem',
  width: '100%',
  minWidth: '44rem',
  minHeight: '44rem',
  borderRadius: '10px',

  '> div': {
    borderRadius: '10px',
  }
});

export const Captions = styled('div', {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  zIndex: '100',

  backgroundColor: '$white1',

  display: 'flex',
  flexDirection: 'column',

  padding: '1rem 2rem',
  borderRadius: '10px',

  boxShadow: '0 2px 10px hsl(0 0% 9.0%)'
});

export const CaptionTitle = styled('div', {
  marginBottom: '1rem',
  fontSize: '1.2rem',
  textAlign: 'center'
});

export const CaptionList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  listStyle: 'none'
});

export const CaptionItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  fontSize: '1rem',
});

export const CaptionColor = styled('span', {
  width: '0.8rem',
  height: '0.8rem',
  borderRadius: '5px',
  backgroundColor: '$red1',
});

export const HideButton = styled('button', {
  background: 'none',
  border: 'none',

  position: 'absolute',
  right: '0.8rem',

  svg: {
    width: '1.2rem',
    height: '1.2rem',
  }
});

export const ShowButton = styled('button', {
  background: 'none',
  border: 'none',

  position: 'absolute',
  right: '1rem',
  top: '1rem',
  zIndex: '100',

  svg: {
    width: '3rem',
    height: '3rem',
  }
});