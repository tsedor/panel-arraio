import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getPhones } from '../features/phones/phonesSlice';

const TableStyled = styled.table`
  grid-column: 1 / 5;
`;

const Phones = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhones())
  }, [dispatch])
  const messages = useSelector(state => state.phones.phones);
  return (
    <TableStyled className="bp3-html-table bp3-html-table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Data</th>
          <th>Numer</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(({ id, date, phone }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{date}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  )
}

export default Phones;