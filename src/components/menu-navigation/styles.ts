import styled from "styled-components";

export const MenuNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #e8e9eb;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 500px;
  width: 30%;
  border-radius: 0.375rem;
  padding: 0.5rem;

  .card-navigation {
    cursor: pointer;
    transition-duration: 300ms;
    text-align: start;
    border: none;
    width: 100%;
    background: #fff;
    padding: 0.75rem;
    border-radius: 0.375rem;
    &:hover,
    &:focus {
      background: #526aae;
      color: #fff;
    }
  }
`;
