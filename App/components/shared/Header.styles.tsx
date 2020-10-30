import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(145deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 52%, rgba(240,240,240,1) 100%);
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #000;

  div.wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;

    a.brand {
      display: flex;
      align-items: center;

      img {
        height: 50px;
        margin: 0 15px 0 0;
      }

      h1 {
        font-size: 32px;
        padding: 0 0 5px 0;
      }
    }

    div.links {
      display: flex;
      height: 100%;
      
      a.link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 100%;
        font-size: 18px;
        font-weight: bold;
        &.active {
          background: linear-gradient(145deg, rgba(226,226,226,1) 0%, rgba(208,208,208,1) 50%, rgba(226,226,226,1) 100%);
        }
      }
    }
  }
`;