import React from 'react';
import GameBoardPage from './components/GameBoardPage';
import GameBoard from './components/GameBoard';
import {Router, Route, hashHistory} from 'react-router';
const router=(
  <Router history={hashHistory}>
    <Route path='/' component={GameBoardPage}/>
  </Router>
);

export default router;
