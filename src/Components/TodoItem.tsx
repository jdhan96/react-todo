import React from 'react';
import {
  ListItem,
  Card,
  CardContent,
  Typography,
  CardActions,
  Checkbox
} from '@material-ui/core';
import Todo from '../models/Todo';

interface TodoProp {
  todo: Todo;
}

export default function TodoItem(props: TodoProp) {
  const [todo, setTodo] = React.useState<Todo>(props.todo);
  const handleToggle = (
    event: React.ChangeEvent<HTMLInputElement>,
    isComplete: boolean
  ) => setTodo({ ...todo, isComplete: isComplete });

  return (
    <ListItem alignItems="flex-start">
      <Card>
        <CardContent>
          <Typography component="h2">{todo.name}</Typography>
          <Typography component="p">{todo.description}</Typography>
        </CardContent>
        <CardActions>
          <Checkbox checked={todo.isComplete} onChange={handleToggle} />
        </CardActions>
      </Card>
    </ListItem>
  );
}
