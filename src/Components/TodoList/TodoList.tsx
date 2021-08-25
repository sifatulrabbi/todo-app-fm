import React from 'react';
import { TodoType } from '../../App';
import Switcher from '../Switcher/Switcher';
import TodoCheck from '../TodoCheck/TodoCheck';
import { Container, Ul, Li } from './todoList.styles';
import { Tab } from '../../App';

interface Props extends Tab {
   data?: TodoType[];
   handleCheck: (id: string) => void;
   handleRemoveTodo: (id: string) => void;
   handleClearComplete: () => void;
}

const TodoList: React.FC<Props> = ({
   data,
   tab,
   handleCheck,
   handleRemoveTodo,
   handleTabChange,
   handleClearComplete,
}) => {
   const notComplete = data?.filter((a) => !a.complete);

   //TODO: drag and drop function;

   return (
      <Container>
         <Ul className="todoList">
            {data &&
               data.map((todo) => (
                  <Li key={todo.id} className="todoList__item" complete={todo.complete}>
                     <TodoCheck
                        id={todo.id}
                        complete={todo.complete}
                        handleCheck={handleCheck}
                     />
                     <span className="todoList__item__label">{todo.name}</span>
                     <button
                        className="todoList__item__btn"
                        onClick={() => handleRemoveTodo(todo.id)}
                     >
                        <CrossIcon />
                     </button>
                  </Li>
               ))}
            <Li className="todoList__item__bottom">
               <span className="todoList__item__btn text">
                  {notComplete?.length} items left
               </span>
               <div className="todoList__item__bottom__wrapper">
                  <Switcher tab={tab} handleTabChange={handleTabChange} />
               </div>
               <button
                  className="todoList__item__btn text btn"
                  onClick={handleClearComplete}
               >
                  clear complete
               </button>
            </Li>
         </Ul>
      </Container>
   );
};

export default TodoList;

const CrossIcon = () => (
   <svg
      className="todoList__item__btn__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
   >
      <path
         fillRule="evenodd"
         d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
   </svg>
);
