import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  transition-duration: 300ms;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0.5rem;
  border: none;
  padding: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.375rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#ccc7be" : " #526aae")};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc7be" : "#2e5984")};
  }
`;
