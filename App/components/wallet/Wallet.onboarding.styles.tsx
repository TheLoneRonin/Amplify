import styled from 'styled-components';

export const WalletOnboardingContainer = styled.div`
  p {
    text-align: center;
    font-size: 24px;
    padding: 30px 0;
  }

  a.load-wallet {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #000;
    background: radial-gradient(circle, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 50%, rgba(226,226,226,1) 100%);
    margin: 30px 15px;
    width: 100%;
    height: 320px;
    cursor: pointer;

    font-size: 24px;
  }
`;