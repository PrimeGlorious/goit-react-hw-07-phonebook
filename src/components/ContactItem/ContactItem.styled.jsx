import styled from 'styled-components';

export const ContactsItem = styled.li`
  gap: 10px;
  align-items: center;
  display: flex;
`

export const ContactsBtn = styled.button`
  background-color: white;
  border: 0.5px solid grey;
  font-size: 16px;
  border-radius: 8%;
  padding: 5px 10px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    background-color: aqua;
    color: #000000;
  }
`
