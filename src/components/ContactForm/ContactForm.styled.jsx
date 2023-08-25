import styled from 'styled-components';

export const PhonebookForm = styled.form`
  background-color: white;
  border: 1px solid black;
  width: 500px;
  padding: 10px;
  margin-bottom: 40px;
`

export const PhonebookLabel = styled.label`
  margin-bottom: 40px;
  font-size: 500;
  font-size: 24px;
  display: flex;
  flex-direction: column;
`

export const PhonebookInput = styled.input`
  margin-top: 5px;
  width: 200px;
`

export const PhonebookBtn = styled.button`
  background-color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  padding: 5px 7px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    background-color: aqua;
    color: black;
  }
`
