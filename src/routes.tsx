import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './pages/Main';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  );
};

export default Router;
