import styled from 'styled-components';
import { } from '../../theme/App.theme';

export const SlidesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  a.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 11;

    &.arrow-right {
      position: absolute;
      right: 30px;
      top: calc(50% - 24px);
    }
    &.arrow-left {
      position: absolute;
      left: 30px;
      top: calc(50% - 24px);
    }
  }

  div.slides {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.25s cubic-bezier(0.33, 1, 0.68, 1);

    &.index-0 { transform: translateX(0%); }
    &.index-1 { transform: translateX(-100%); }
    &.index-2 { transform: translateX(-200%); }
    &.index-3 { transform: translateX(-300%); }
    &.index-4 { transform: translateX(-400%); }
    &.index-5 { transform: translateX(-500%); }
    &.index-6 { transform: translateX(-600%); }
    &.index-7 { transform: translateX(-700%); }
    &.index-8 { transform: translateX(-800%); }
  }

  div.slide {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      max-width: 80%;
      margin: 45px 0;
    }

    &:nth-child(1) { left: 0; }
    &:nth-child(2) { left: 100%; }
    &:nth-child(3) { left: 200%; }
    &:nth-child(4) { left: 300%; }
    &:nth-child(5) { left: 400%; }
    &:nth-child(6) { left: 500%; }
    &:nth-child(7) { left: 600%; }
    &:nth-child(8) { left: 700%; }
    &:nth-child(9) { left: 800%; }
  }

  div.title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 0 30px 0;
    img {
      height: 96px;
      margin: 0 15px 0 0;
    }
    h2 {
      font-size: 48px;
    }
  }

  h3 {
    font-size: 32px;
  }

  p {
    font-size: 24px;
    padding: 30px 0;
  }

  ul {
    padding: 30px 0;
  }

  ul li {
    font-size: 24px;
    padding: 10px;
  }
`;