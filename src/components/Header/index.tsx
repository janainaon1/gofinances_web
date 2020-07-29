import React from 'react';

import { Container, Item } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Item to="/">Listagem</Item>
        <Item to="/import">Importar</Item>
      </nav>
    </header>
  </Container>
);

export default Header;
