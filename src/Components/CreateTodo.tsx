import React from 'react';
import {
  TextField,
  Theme,
  Button,
  DialogTitle,
  DialogContentText,
  Dialog,
  DialogContent,
  makeStyles,
  createStyles,
  DialogActions
} from '@material-ui/core';
import Todo from '../models/Todo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })
);

interface CreateTodoProp {
  open: boolean;
  onClose(): void;
  onSubmit(todo: Todo): void;
}

export default function CreateTodo(props: CreateTodoProp) {
  const classes = useStyles();
  const [todo, setTodo] = React.useState<Todo>(initialState);

  function initialState(): Todo {
    return {
      name: '',
      description: '',
      isComplete: false
    };
  }

  const handleChange = (name: keyof Todo) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTodo({ ...todo, [name]: event.target.value });

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onSubmit(todo);
    reset();
  };

  const reset = () => {
    setTodo(initialState);
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Create Todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter below to create a todo.
        </DialogContentText>

        <TextField
          required
          label="Name"
          className={classes.textField}
          margin="normal"
          value={todo.name}
          onChange={handleChange('name')}
        />
        <TextField
          required
          label="Description"
          className={classes.textField}
          margin="normal"
          value={todo.description}
          onChange={handleChange('description')}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create
        </Button>
        <Button variant="contained" color="secondary" onClick={reset}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
