import React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <Main />
    </DndProvider>
  );
};

export default App;
