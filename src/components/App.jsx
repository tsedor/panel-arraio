import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Main from './Main';
import Login from './Login';
import messagesReducer from '../features/messages/messagesSlice';
import phonesReducer from '../features/phones/phonesSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    phones: phonesReducer,
    user: userReducer
  }
})

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

const state = store.getState();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        {state.user.token === '' && <Redirect to="/login" />}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;