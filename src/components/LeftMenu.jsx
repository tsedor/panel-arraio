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

const menuItems = [{
  text: 'Dashboard',
  icon: 'home',
  path: '/'
}, {
  text: 'Wiadomości',
  icon: 'inbox',
  path: '/messages'
}, {
  text: 'Telefony',
  icon: 'phone',
  path: '/phones'
}]

const LeftMenu = ({ history }) => {
  console.log(history)
  const dispatch = useDispatch();
  return (
    <MenuStyled>
      {menuItems.map(({ text, icon, path }) => <MenuItem key={text} text={text} icon={icon} onClick={() => history.push(path)} active={history.location.pathname === path} />)}
      <MenuDivider />
      <MenuItem text="Wyloguj się" icon="log-out" onClick={() => dispatch(logout())} />
    </MenuStyled>
  )
}

export default withRouter(LeftMenu);