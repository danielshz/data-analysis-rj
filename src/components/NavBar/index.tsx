import { Link, useLocation } from "react-router-dom";

import { Nav, NavList, NavItem } from './styles';

export default function NavBar() {
  const location = useLocation();

  const routes = [
    { name: 'Unidades de saúde', path: '/' },
    { name: 'Faixa de renda', path: '/income' },
    { name: 'Extrema pobreza', path: '/poverty' },
    { name: 'Bolsa família', path: '/bolsa_familia' },
    { name: 'Covid-19', path: '/covid' },
  ];
  
  return (
    <Nav>
      <NavList>
        {routes.map(({ name, path }) => (
          <NavItem key={name} style={{ fontWeight: location.pathname == path ? '500' : '300' }}>
            <Link to={path}>{name}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}