import styled from 'styled-components';
import { bgDesktopLight, bgMobileLight } from './Images';

export const AppWrapper = styled.div`
   width: 100%;
   height: 100%;
   background: url(${bgMobileLight});
   background-size: 100%;
   background-position: top;
   background-repeat: no-repeat;

   @media screen and (min-width: 750px) {
      background: url(${bgDesktopLight});
      background-size: 100%;
      background-position: top;
      background-repeat: no-repeat;
   }

   .appContainer {
      width: 100%;
      max-width: 550px;
      height: max-content;
      margin: 0 auto;
      padding: 1.3rem;
   }
`;
