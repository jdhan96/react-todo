import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

export default function Nav() {
  const [value, setValue] = React.useState<number>(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }
  return (
    <BrowserRouter>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Login" component={Link} to="/login" />
          <Tab label="Signup" component={Link} to="/signup" />
        </Tabs>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route render={() => <h1>404 Error</h1>} />
        </Switch>
      </Paper>
    </BrowserRouter>
  );
}
