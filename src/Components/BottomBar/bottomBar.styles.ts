import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   padding: 1.2rem;
   background-color: ${(p) => p.theme.palette.background.paper};
   border-radius: ${(p) => p.theme.borderRadius};
   box-shadow: ${(p) => p.theme.boxShadow};
   display: flex;
   justify-content: center;

   @media screen and (min-width: 900px) {
      display: none;
   }
`;
