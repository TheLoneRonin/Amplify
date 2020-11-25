import styled from 'styled-components';
import { } from '../../theme/App.theme';

export const AboutContainer = styled.div`
  padding: 30px 15px 180px 15px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 15px 0;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 15px 0;
  }

  a.link {
    display: flex;
    color: blue;
    margin: 0 0 15px 0;
    text-decoration: underline;
  }

  p {
    font-size: 16px;
    line-height: 2;
    margin: 0 0 15px 0;
  }

  div.diagrams {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      margin: 30px 0;
    }
  }
`;