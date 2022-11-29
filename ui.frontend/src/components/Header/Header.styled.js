import styled from "styled-components";
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  width: 100vw;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  img {
    height: 75px;
    padding-left: 1vw;
  }
  #weather{
    padding-right: 2vw;
  }
  #name {
      display: block;
      text-align: right;
      }
  #datetime {
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (max-width: 1000px) {
      display: none;
    }
    span {
      &:nth-child(1) {
        display: flex;
        justify-content: center;
        font-size: 6em;
        font-weight: 700;
        line-height: 100%;
      }
      &:nth-child(2) {
        font-size: 0.875em;
        line-height: 0%;
        text-align: center;
        margin-bottom: 10%;
      }
    }
    #weather {
      padding-top: 1%;
      font-size: 0.875rem;
      
      #name {
      display: block;
      text-align: right;
      }
    }
  }
`;
