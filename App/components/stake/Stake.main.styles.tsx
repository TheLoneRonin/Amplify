import styled from 'styled-components';

export const StakeMainContainer = styled.div`
  padding: 15px;

  div.line {
    width: 100%;
    height: 2px;
    background: black;
    margin: 45px 0 30px 0;
  }

  p {
    font-size: 24px;
    text-align: left;
    padding: 15px 0;

    &.notice {
      font-size: 18px;
      font-weight: bold;
      a {
        color: #2a69ac;
        text-decoration: underline;
      }
    }
  }
`;