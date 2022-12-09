import { styled } from '../../styles/themes';

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '6rem',
  padding: '1.6rem',
  backgroundColor: '$black1',
  color: '$white1'
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
    color: '$white2',
  },
  
  a: {
    textDecoration: 'none',
    color: '$white1'
  }
});