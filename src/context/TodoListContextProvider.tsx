import { createContext, useState } from 'react';
import { ITodo } from '../consts/interfaces/ITodo.ts';

const initialTodos: ITodo[] = [
  {
    id: 1,
    text: 'buy groceries',
  },
  {
    id: 2,
    text: 'walk the dog',
  },
  {
    id: 3,
    text: 'do laundry',
    isCompleted: true,
  },
  {
    id: 4,
    text: 'exercise',
  },
];

export interface ITodoListContext {
  todoList: ITodo[];
  todosAmount: number;
  completedTodosAmount: number;
  onAddNewTodo: (value: string) => void;
  onToggleTodo: (todoId: number) => void;
  onRemoveTodo: (todoId: number) => void;
  onLogIn: () => void;
  onRegister: () => void;
}

export const TodoListContext = createContext<ITodoListContext>(null);

function TodoListContextProvider({ children }) {
  const [todoList, setTodoList] = useState<ITodo[]>(initialTodos);
  const todosAmount = todoList.length;
  const completedTodosAmount = todoList.filter(
    (todo) => todo.isCompleted
  ).length;

  function onAddNewTodo(text: string) {
    const newTodo: ITodo = {
      id: todoList ? todoList.length + 1 : 0,
      text,
    };

    setTodoList([...todoList, newTodo]);
  }

  function onToggleTodo(todoId: number) {
    setTodoList((todoList: ITodo[]) => {
      return todoList.map((item: ITodo) => {
        if (item.id === todoId) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    });
  }

  function onRemoveTodo(todoId: number) {
    const freshTodoList: ITodo[] = todoList
      .filter((item: ITodo) => item.id !== todoId)
      .map((item: ITodo, idx) => {
        return { ...item, id: idx + 1 };
      });

    setTodoList(freshTodoList);
  }

  function onLogIn() {}

  function onRegister() {}

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        todosAmount,
        completedTodosAmount,
        onAddNewTodo,
        onToggleTodo,
        onRemoveTodo,
        onLogIn,
        onRegister,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export default TodoListContextProvider;
