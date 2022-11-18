import styled from "styled-components";

export const Right = styled.div`
  width: 60vw;

  div {
    text-align: end;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  h1 {
    color: #c12d18;
    font-size: 3em;
    line-height: 0.9em;
    &:first-child {
      font-size: 2.25em;
    }
  }
  p {
    color: #000000;
    font-size: 1.5em;
    margin-bottom: 2%;
  }
`;
