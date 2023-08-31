import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

export const CountriesListingContainer = styled.div`
  width: 70%;
  display: flex;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }

  .listing-container {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid lightgray;
    background: transparent;
    align-items: center;
    gap: 10px;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      font-size: 16px;
      color: #555;
      font-weight: bold;
    }

    .flag-alignment {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .listing-container:nth-last-child(1) {
    border-bottom: none;
  }

  .countries-container {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const ArrowIcon = styled(HiArrowNarrowRight).attrs({
  color: "#888",
  size: 25,
})``;
