import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  width: fit-content;
  padding: 4px;

  :hover {
    background-color: blue;
    color: white;
  }
`;

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
