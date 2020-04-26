import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Dashboard from './Dashboard';
import LeftMenu from './LeftMenu';
import Messages from './Messages';
import Phones from './Phones';

const MainContainer = styled.main`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  @media(min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Main = () => {
  const token = useSelector(state => state.user.token);
  return (
    <>
      {token === '' && <Redirect to="/login" />}
      <LeftMenu />
      <MainContainer>
        <Switch>
          <Route path="/messages" component={Messages} />
          <Route path="/phones" component={Phones} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </MainContainer>
    </>
  )
}

export default Main;