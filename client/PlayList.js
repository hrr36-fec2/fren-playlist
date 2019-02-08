import React from 'react';

import List from './components/List'
import Info from './components/Info'

import { Container } from './components/Styled.js'

const PlayList = () => {
  return (
    <Container>
      <List />
      <Info />
    </Container>
  );
}

export default PlayList;