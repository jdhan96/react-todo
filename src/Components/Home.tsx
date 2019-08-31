import React from 'react';
import { List } from '@material-ui/core';
import TodoItem from './TodoItem';
import Todo from '../models/Todo';
import CreateTodo from './CreateTodo';

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

  function insertTodo(newTodo: Todo) {
    setTodos([...todos, newTodo]);
  }

  const todoList = todos.map((todo, index) => (
    <TodoItem key={index} todo={todo} />
  ));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <button type="button" onClick={handleOpen}>
        Create new Todo
      </button>
      <CreateTodo open={open} onClose={handleClose} onSubmit={insertTodo} />
      <List>{todoList}</List>
    </React.Fragment>
  );
}
