import { Link, useLocation } from "react-router-dom";

import { Nav, NavList, NavItem } from './styles';

export default function NavBar() {
  const location = useLocation();

  console.log(location);

  return (
    <Nav>
      <NavList>
        <NavItem style={{ fontWeight: location.pathname == '/' ? '500' : '300' }}><Link to='/'>Geral</Link></NavItem>
        <NavItem><Link to='../other'>Unidades de saúde</Link></NavItem>
        <NavItem><Link to='../other'>Faixa de renda</Link></NavItem>
        <NavItem><Link to='../other'>Extrema pobreza</Link></NavItem>
        <NavItem><Link to='../other'>Bolsa família</Link></NavItem>
        <NavItem style={{ fontWeight: location.pathname == '/covid' ? '500' : '300' }}><Link to='../covid'>Casos de COVID-19</Link></NavItem>
      </NavList>
    </Nav>
  );
}