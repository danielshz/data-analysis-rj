import { Nav, NavList, NavItem } from './styles';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Nav>
      <NavList>
        <NavItem><Link to='/'>Geral</Link></NavItem>
        <NavItem><Link to='../other'>Unidades de saúde</Link></NavItem>
        <NavItem><Link to='../other'>Faixa de renda</Link></NavItem>
        <NavItem><Link to='../other'>Extrema pobreza</Link></NavItem>
        <NavItem><Link to='../other'>Bolsa família</Link></NavItem>
        <NavItem><Link to='../other'>Casos de COVID-19</Link></NavItem>
      </NavList>
    </Nav>
  );
}