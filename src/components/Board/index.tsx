import React, {useState} from 'react';
import produce from 'immer';
import BoardContext from './context';
import List, {ListProps} from '../List';
import {Container} from './styles';
import {loadLists} from '../../data';

const listsResponse = loadLists();

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListProps[]>(listsResponse);

  const moveCard = (
    fromList: number,
    toList: number,
    from: number,
    to: number,
  ) => {
    setLists(
      produce(lists, (draft: any) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      }),
    );
  };

  return (
    <BoardContext.Provider value={{lists, moveCard}}>
      <Container>
        {lists.map((list, index) => (
          <List
            title={list.title}
            creatable={list.creatable}
            cards={list.cards}
            done={list.done}
            key={index}
            index={index}
          />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
