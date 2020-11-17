import styled from 'styled-components';

export const WalletInfoContainer = styled.div`
  padding: 30px 15px;

  div.loader-wrap {
    position: relative;

    div.loader {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: white;
      z-index: 1;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);

      &.active {
        opacity: 1;
      }
    }
  }

  p.large {
    padding: 30px 15px;
    font-size: 24px;
    font-weight: bold;
  }

  p.label {
    padding: 15px;
    font-size: 18px;
  }

  div.line {
    width: 100%;
    height: 2px;
    background: black;
    margin: 45px 0 30px 0;
  }

  div.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    p {
      font-size: 18px;
      &:nth-child(2) {
        font-weight: bold;
      }
    }
  }

  a.load-wallet {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #000;
    background: radial-gradient(circle, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 50%, rgba(226,226,226,1) 100%);
    margin: 45px 15px;
    width: 100%;
    height: 320px;
    cursor: pointer;

    font-size: 24px;
  }
`;