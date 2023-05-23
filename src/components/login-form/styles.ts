import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  h1 {
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 0.5rem;

    .input-alignment {
      display: flex;
      flex-direction: column;
      width: 100%;

      input {
        width: 100%;
        background-color: #f2f3f4;
        height: 2.5rem;
        border: 1px solid;
        border-radius: 0.375rem;
        outline: none;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        font-size: 1rem;
    }
    }
  }
`;
