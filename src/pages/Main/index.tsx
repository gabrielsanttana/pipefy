import React from 'react';
import Board from '../../components/Board';
import Header from '../../components/Header';
import {Container} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
};

export default Main;
