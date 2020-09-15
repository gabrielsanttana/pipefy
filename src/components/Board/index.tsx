import React from 'react';
import List, {ListProps} from '../List';
import {Container} from './styles';

interface BoardProps {
  lists: ListProps[];
}

const Board: React.FC<BoardProps> = ({lists}) => {
  const moveCard = (from: number, to: number) => {};

  return (
    <Container>
      {lists.map((list, index) => (
        <List
          title={list.title}
          creatable={list.creatable}
          cards={list.cards}
          done={list.done}
          key={index}
        />
      ))}
    </Container>
  );
};

export default Board;
