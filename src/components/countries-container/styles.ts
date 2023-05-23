import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const CountriesContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 10px auto;
  width: 50%;
  background: #f2f3f4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  h1 {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
`;

export const SearchIcon = styled(AiOutlineSearch).attrs({
  color: "gray",
  size: 30,
})`
  position: absolute;
  top: 5px;
  left: 2px;
`;
