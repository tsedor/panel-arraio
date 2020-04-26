import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getMessages } from '../features/messages/messagesSlice';

const TableStyled = styled.table`
  grid-column: 1 / 5;
`;

const Messages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])
  const messages = useSelector(state => state.messages.messages);
  return (
    <TableStyled className="bp3-html-table bp3-html-table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Imię</th>
          <th>Data</th>
          <th>Treść</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(({ id, name, date, message }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{message}</td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  )
}

export default Messages;