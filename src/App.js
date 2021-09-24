import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
        <Route path="/chat/:person"> {/*Colon represents a wild card- any user chat pops here*/ }
          <Header backButton="/chat"/>
        <ChatScreen/>
            </Route>
          <Route path="/chat">
          <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
          <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
