import styled from "styled-components";

interface StyleProps {
  isOpen?: boolean;
}

export const Overlay = styled.div<StyleProps>`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  left: 0;
  top: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  h1 {
    font-size: 22px;
    color: black;
  }

  .seasons-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 16px;

    button {
      border: 1px solid black;
      transition-duration: 300ms;
      cursor: pointer;
      padding: 3px 10px;
      border-radius: 0.25rem;
      color: black;
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .cancel-button {
    background: transparent;
    cursor: pointer;
    border: none;
    font-size: 20px;
    margin-right: 8px;
    color: black;
  }
`;
