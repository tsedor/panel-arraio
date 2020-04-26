import React from 'react';
import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginRequest, loginValueChange, passwordValueChange } from '../features/user/userSlice';

const LoginContainer = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;

const InputGroupStyled = styled(InputGroup)`
  margin-bottom: 20px;
`;

const CardStyled = styled(Card)`
  max-width: 400px;
  text-align: center;
  width: 100%;
`;

const Login = () => {
  const dispatch = useDispatch();
  const loginValue = useSelector(state => state.user.loginForm.login);
  const passwordValue = useSelector(state => state.user.loginForm.password);
  const request = useSelector(state => state.user.loginForm.request);
  const token = useSelector(state => state.user.token);
  return (
    <LoginContainer>
      {token !== '' && <Redirect to="/" />}
      <CardStyled elevation={Elevation.TWO}>
        <InputGroupStyled placeholder="Login" leftIcon="user" value={loginValue} onChange={e => dispatch(loginValueChange(e.target.value))} />
        <InputGroupStyled placeholder="Hasło" leftIcon="lock" value={passwordValue} onChange={e => dispatch(passwordValueChange(e.target.value))} />
        <Button onClick={() => dispatch(loginRequest())} loading={request}>Zaloguj</Button>
      </CardStyled>
    </LoginContainer>
  )
}

export default Login;