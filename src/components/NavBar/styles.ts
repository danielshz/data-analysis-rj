// import { styled } from '@stitches/react';
import { styled } from '../../styles/themes';

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '6rem',
  padding: '1.6rem',
  backgroundColor: '#24222F',
  color: '#FFFFFF'
});

export const NavList = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
  width: '100%',
  listStyle: 'none',
});

export const NavItem = styled('li', {
  fontSize: '1.4rem',
  cursor: 'pointer',
  height: '100%',

  ':hover': {
    color: 'rgba(255,255,255,0.7)',
  },
  
  a: {
    textDecoration: 'none',
    color: '#FFFFFF'
  }
});