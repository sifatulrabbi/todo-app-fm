import React from 'react';
import { TodoType } from '../../App';
import { Container } from './addTodo.styles';
import { v4 as uuid } from 'uuid';

interface Props {
    handleAddTodo: (todo: TodoType) => void;
}

class Todo {
    id: string;
    name: string;
    complete: boolean;

    constructor(name: string) {
        this.id = uuid();
        this.name = name;
        this.complete = false;
    }
}

const AddTodo: React.FC<Props> = ({ handleAddTodo }) => {
    const [todo, setTodo] = React.useState<string>('');

    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setTodo(e.currentTarget.value);
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleAddTodo(new Todo(todo));
        setTodo('');
    };

    return (
        <Container className="addTodo" onSubmit={handleSubmit}>
            <input
                type="text"
                className="addTodo__input"
                value={todo}
                onChange={handleChange}
            />
        </Container>
    );
};

export default AddTodo;
