import React, { useEffect } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages } from '../features/messages/messagesSlice';
import { getPhones } from '../features/phones/phonesSlice';

const H2 = styled.h2`
  text-align: center;
`;

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
    dispatch(getPhones());
  }, [dispatch]);
  const messagesCount = useSelector(state => state.messages.messages).length;
  const phonesCount = useSelector(state => state.phones.phones).length;
  return (
    <>
      <Card interactive elevation={Elevation.TWO} onClick={() => history.push('/messages')}>
        <h5>Nowych wiadomości:</h5>
        <H2>{messagesCount}</H2>
      </Card>
      <Card interactive elevation={Elevation.TWO} onClick={() => history.push('/phones')}>
        <h5>Nowych telefonów:</h5>
        <H2>{phonesCount}</H2>
      </Card>
    </>
  )
}

export default withRouter(Dashboard);