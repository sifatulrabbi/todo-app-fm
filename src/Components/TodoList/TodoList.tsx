import React from 'react';
import { TodoType } from '../../App';
import TodoCheck from '../TodoCheck/TodoCheck';
import { Container } from './todoList.styles';

interface Props {
   data?: TodoType[];
   handleCheck: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ data, handleCheck }) => {
   return (
      <Container>
         <ul className="todoList">
            {data &&
               data.map((todo) => (
                  <li
                     key={todo.id}
                     className="todoList__item"
                     style={{
                        textDecoration: todo.complete ? 'underline' : 'none',
                     }}
                  >
                     {todo.name}
                     <TodoCheck
                        id={todo.id}
                        complete={todo.complete}
                        handleCheck={handleCheck}
                     />
                  </li>
               ))}
         </ul>
      </Container>
   );
};

export default TodoList;
