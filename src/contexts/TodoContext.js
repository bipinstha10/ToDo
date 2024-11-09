import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, title: "Learn React", completed: true }],
  addTodo: (title) => {},
  updateTodo: (id, title) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
