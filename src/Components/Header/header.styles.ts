import styled from 'styled-components';
import { sunIcon, moonIcon } from '../../Images';

export const Container = styled.section`
   width: 100%;
   margin: 1.2rem 0 1.5rem 0;
   display: grid;
   grid-template-columns: 1fr 1fr;

   .header__logo {
      font-size: 1.7rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-weight: 700;
   }

   .header__iconBtn {
      width: 30px;
      height: 30px;
      justify-self: flex-end;
      background: url(${(p) => (p.theme.dark ? sunIcon : moonIcon)});
      background-repeat: no-repeat;
      background-position: center;
      background-color: 100%;
   }
`;
