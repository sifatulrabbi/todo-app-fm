import React from 'react';
import { checkIcon } from '../../Images';
import { Container } from './todoCheck.styles';

interface Props {
   handleCheck: (id: string) => void;
   id: string;
   complete: boolean;
}

const TodoCheck: React.FC<Props> = ({ handleCheck, id, complete }) => {
   const handleClick = () => {
      return handleCheck(id);
   };

   return (
      <Container>
         <button
            onClick={handleClick}
            className={complete ? 'todoCheck checked' : 'todoCheck'}
         >
            {complete && <img src={checkIcon} alt="" />}
         </button>
      </Container>
   );
};

export default TodoCheck;
