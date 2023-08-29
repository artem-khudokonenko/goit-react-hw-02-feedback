import styled from 'styled-components';

export const Button = styled.button`
  color: #000;
  font-size: 20px;
  margin: 10px;
  padding: 5px;
  border: 2px solid #000;
  border-radius: 3px;

  &:hover {
    color: #00ff00;
    border: 2px solid #00ff00;

    cursor: pointer;
  }
`;
