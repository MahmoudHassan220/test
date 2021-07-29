import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TableActions = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    height: 14px;
    width: 14px;
    fill: #fff;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  button {
    color: #fff;
    width: 120px;
    height: 40px;
    font-size: 16px;
  }
`;
