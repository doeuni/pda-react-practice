import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext(null);
import { fetchTodoList, addTodo as addTodoServer } from '../services/todoService';
export default function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([
    {
      text: '초기값',
      color: 'green',
    },
  ]);

  const addTodo = (todo) => {
    addTodoServer({
      text: todo.text,
      color: todo.color,
    }).then((data) => {
      setTodoList((prev) => [...prev, data]);
    }); //인자하나받고(객체) 리턴(아웃풋)은 
    // const newTodoList = [
    //   ...todoList,
    //   {
    //     id: uuidv4(),
    //     text: todo.text,
    //     color: todo.color,
    //   },
    // ];
    // setTodoList(newTodoList);
    // localStorage.setItem('todoarr', JSON.stringify(newTodoList));
  };
  useEffect(() => {
    const data = localStorage.getItem('todoarr');
    if (data) {
      setTodoList(JSON.parse(data));
    }
  }, []);

  const removeTodo = (todoId) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(newTodoList);
    localStorage.setItem('todoarr', JSON.stringify(newTodoList));
  };

  const updateTodo = (todoId, todo) => {
    const newTodoList = todoList.map((prevTodo) => {
      if (prevTodo.id === todoId) {
        return {
          ...prevTodo,
          ...todo,
        };
      }
      return prevTodo;
    });
    setTodoList(newTodoList);
    localStorage.setItem('todoarr', JSON.stringify(newTodoList));
  };

  return <TodoContext.Provider value={{ todoList, addTodo, removeTodo, updateTodo }}>{children}</TodoContext.Provider>;
}
