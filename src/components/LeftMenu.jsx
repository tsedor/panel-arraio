import React from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../features/user/userSlice';

const MenuStyled = styled(Menu)`
  height: 100%;
  float: left;
  max-width: 250px;
`;

const LeftMenu = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <MenuStyled>
      <MenuItem text="Dashboard" icon="home" onClick={() => history.push('/')} />
      <MenuItem text="Wiadomości" icon="inbox" onClick={() => history.push('/messages')} />
      <MenuItem text="Telefony" icon="phone" onClick={() => history.push('/phones')} />
      <MenuDivider />
      <MenuItem text="Wyloguj się" icon="log-out" onClick={() => dispatch(logout())} />
    </MenuStyled>
  )
}

export default withRouter(LeftMenu);