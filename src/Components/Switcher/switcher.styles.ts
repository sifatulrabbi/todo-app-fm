import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, auto);

   .switcher__btn {
      font-weight: 700;
      color: ${(p) => p.theme.palette.fontColor.secondary};
      padding: 0 0.7rem;
      transition: 300ms ease;

      &:hover {
         color: ${(p) => p.theme.palette.fontColor.primary};
      }

      &.active {
         color: ${(p) => p.theme.palette.primary.main};
      }
   }
`;
