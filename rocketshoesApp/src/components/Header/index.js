import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Wrapper, Logo, BasketContainer, ItemCount } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
