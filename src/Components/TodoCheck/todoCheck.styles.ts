import styled from 'styled-components';

export const Container = styled.div`
   .todoCheck {
      width: 1.3rem;
      height: 1.3rem;
      border: 1px solid ${(p) => p.theme.palette.fontColor.secondary};
      border-radius: 50%;
      transition: 300ms ease;
      background: ${(p) => p.theme.palette.background.paper};

      &.checked {
         background: ${(p) => p.theme.palette.primary.gradient};
      }

      @media screen and (min-width: 1050px) {
         &:hover {
            border-color: ${(p) => p.theme.palette.hover};
         }
      }
   }
`;
