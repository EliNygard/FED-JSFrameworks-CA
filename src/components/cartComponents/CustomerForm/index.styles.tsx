import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.4rem;
  }

  input {
    border: solid 1.5px whitesmoke;
    padding: 0.2rem;
    margin-bottom: 0.8rem;
  }
`;
