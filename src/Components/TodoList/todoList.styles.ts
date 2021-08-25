import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   margin: 1.2rem 0;
   border-radius: ${(p) => p.theme.borderRadius};
   background-color: ${(p) => p.theme.palette.background.paper};
   overflow: none;
   box-shadow: ${(p) => p.theme.boxShadow};
`;

export const Ul = styled.ul`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr;
`;

interface Props {
   complete?: boolean;
}

export const Li = styled.li<Props>`
   padding: 1.2rem;
   display: flex;
   border-bottom: 1px solid ${(p) => p.theme.palette.inactive};
   display: grid;
   grid-template-columns: auto 1fr auto;

   &.todoList__item__bottom {
      max-width: 100%;
      display: flex;
      justify-content: space-between;

      .todoList__item__bottom__wrapper {
         @media screen and (max-width: 800px) {
            display: none;
         }
      }
   }

   &:last-child {
      border-bottom: none;
   }

   .todoList__item__label {
      display: inline-block;
      line-break: normal;
      line-height: 1.4;
      padding-left: 1rem;
      ${(p) =>
         p.complete &&
         `text-decoration: line-through; 
         color: ${p.theme.palette.fontColor.secondary};
      `}
   }

   .todoList__item__btn {
      height: 1rem;
      width: 1rem;

      &.text {
         width: max-content;
         color: ${(p) => p.theme.palette.fontColor.secondary};

         &.btn {
            transition: 300ms ease;
            &:hover {
               color: ${(p) => p.theme.palette.fontColor.primary};
            }
         }
      }

      .todoList__item__btn__icon {
         fill: ${(p) => p.theme.palette.fontColor.secondary};
         transition: 300ms ease;

         &:hover {
            fill: ${(p) => p.theme.palette.fontColor.primary};
         }
      }
   }
`;
