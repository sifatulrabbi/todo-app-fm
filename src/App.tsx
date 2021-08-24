/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './Theme';

const AddTodo = lazy(() => import('./Components/AddTodo/AddTodo'));
const TodoList = lazy(() => import('./Components/TodoList/TodoList'));

export type TodoType = {
    id: string;
    name: string;
    complete: boolean;
};

const LOCAL_KEY_TODO = 'todoAppFm.savedTodo';

const sample: TodoType = {
    id: 'initialTodoId',
    name: 'Add a todo',
    complete: false,
};

const App: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState<boolean>(false);
    const [allTodo, setAllTodo] = React.useState<TodoType[]>([]);
    const [todoData, setTodoData] = React.useState<TodoType[]>([sample]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    const updateTodoData = (data: TodoType[], all: boolean) => {
        if (all) {
            setAllTodo(data);
            setTodoData(data);
        } else {
            setTodoData(data);
        }
    };

    const saveTodo = () => {
        localStorage.setItem(LOCAL_KEY_TODO, JSON.stringify(allTodo));
    };

    const getTodo = () => {
        const localTodo = localStorage.getItem(LOCAL_KEY_TODO);

        if (localTodo) {
            const newTodoData: TodoType[] = JSON.parse(localTodo);
            updateTodoData(newTodoData, true);
        }
    };

    const handleAddTodo = (todo: TodoType) => {
        const newTodoData = [...todoData, todo];

        updateTodoData(newTodoData, true);
    };

    const handleCheck = (id: string) => {
        const [todo] = todoData.filter((data) => data.id === id);
        const remainingTodoData: TodoType[] = todoData.filter((todo) => todo.id !== id);

        todo.complete = !todo.complete;

        const newTodoData: TodoType[] = [...remainingTodoData, todo];
        updateTodoData(newTodoData, true);
    };

    const filterTodo = (all: boolean) => {
        if (all) return;

        const filteredTodoData: TodoType[] = allTodo.filter((todo) => todo.complete);
        setTodoData(filteredTodoData);
    };

    React.useEffect(() => {
        getTodo();
    }, []);

    React.useEffect(() => {
        saveTodo();
    }, [allTodo]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Suspense fallback={<div>loading...</div>}>
                <AddTodo handleAddTodo={handleAddTodo} />
                <TodoList data={todoData} handleCheck={handleCheck} />
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
