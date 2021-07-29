import styled from "styled-components";

import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Remove } from "../../assets/icons/delete.svg";

export const CardContainer = styled.div`
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 16%);
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.width}%;
  margin-bottom: 8px;
`;

export const Row = styled.div`
  display: flex;

  &:last-child {
    margin-top: 16px;
    padding-top: 8px;
    border-top: 1px solid #eee;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  width: max-content;
  margin-bottom: 8px;
  color: #0e75b1;
`;

export const Value = styled.div`
  font-size: 16px;
  color: #707070;
`;

export const Description = styled(Value)`
  text-overflow: ellipsis;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    height: 14px;
    width: 14px;
  }

  button {
    background-color: transparent;
    min-width: 30px;

    &:first-child {
      margin-right: 8px;
    }

    &:hover {
      background-color: #eee;
    }
  }
`;

export const EditIcon = styled(Edit)`
  fill: #0e75b1;
`;

export const RemoveIcon = styled(Remove)`
  fill: #f00;
`;
