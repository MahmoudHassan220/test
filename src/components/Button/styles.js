import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #f27100;
  border: none;
  padding: 0;
  margin: 0;
  min-height: 30px;
  min-width: 60px;
  cursor: pointer;
  border-radius: 5px;
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
