import styled from 'styled-components';

export const Container = styled.form`
   z-index: 2;
   width: 100%;
   height: max-content;

   .addTodo__input {
      width: 100%;
      padding: 1.2rem;
      background-color: ${(p) => p.theme.palette.background.paper};
      border-radius: ${(p) => p.theme.borderRadius};
   }
`;
