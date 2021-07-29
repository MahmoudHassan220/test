import styled from "styled-components";

export const Content = styled.form`
  padding: 20px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.fullWidth ? 100 : 50)}%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;

  button {
    height: 40px;
    width: 120px;
    color: #fff;
  }
`;
