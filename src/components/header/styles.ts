import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLogout } from "react-icons/md";

export const HeaderContainer = styled.header`
  background: #0023ae;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-content {
    h1 {
      color: #fff;
      font-weight: bolder;
      font-size: 32px;
    }
    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }

  button {
    border: none;
    text-decoration: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  span {
    font-size: 26px;
    color: #fff;
    text-decoration: none;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;

export const HamburgerMenu = styled(RxHamburgerMenu).attrs({
  color: "#fff",
  size: 30,
})`
  cursor: pointer;
`;

export const LogoutIcon = styled(MdLogout).attrs({
  color: "white",
  size: 30,
})`
  cursor: pointer;
`;
