import React from 'react';
import List, {ListProps} from '../List';
import {Container} from './styles';

interface BoardProps {
  lists: ListProps[];
}

const Board: React.FC<BoardProps> = ({lists}) => {
  return (
    <Container>
      {lists.map((list) => (
        <List
          title={list.title}
          creatable={list.creatable}
          cards={list.cards}
          done={list.done}
        />
      ))}
    </Container>
  );
};

export default Board;
