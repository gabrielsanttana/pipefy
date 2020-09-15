import React, {useState, useEffect} from 'react';
import Board from '../../components/Board';
import Header from '../../components/Header';
import {ListProps} from '../../components/List';
import {loadLists} from '../../data';
import {Container} from './styles';

const Main: React.FC = () => {
  const [lists, setLists] = useState<ListProps[]>([]);

  useEffect(() => {
    const listsResponse = loadLists();
    setLists(listsResponse);
  }, []);

  return (
    <Container>
      <Header />
      <Board lists={lists} />
    </Container>
  );
};

export default Main;
