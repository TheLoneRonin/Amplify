import styled from 'styled-components';

export const IndexTitleContainer = styled.div`
  padding: 15px;

  a {
    color: #2a69ac;
  }

  div.title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 0 15px 0;
    img {
      margin: 0 15px 0 0;
      height: 96px;
    }
    h1 {
      font-size: 42px;
    }
  }

  h2 {
    font-size: 32px;
    text-align: center;
    padding: 0 0 45px 0;
  }

  div.progression {
    position: relative;
    width: 100%;

    div.progress-dot {
      position: absolute;
      left: 0;
      top: 36px;
      background: #2a69ac;
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &:nth-child(2) { left: 25%; }
      &:nth-child(3) { left: 50%; }
      &:nth-child(4) { left: 75%; }
      &:nth-child(5) { left: 100%; }
    }

    div.progress-line {
      position: absolute;
      left: 0;
      top: 39px;
      width: 25%;
      height: 4px;
      background: #2a69ac;

      &.length-0 { width: 25%; }
      &.length-1 { width: 50%; }
      &.length-2 { width: 75%; }
      &.length-3 { width: 100%; }
    }
  }

  div.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    p {
      font-size: 24px;
      padding: 0;
    }
  }
`;