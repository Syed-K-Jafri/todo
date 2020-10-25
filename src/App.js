import NavBar from './NavBar/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todo from './Todos/Todo';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/todo" />
        </Route>
        <Route exact path={"/todo"} component={Todo} />
        <Route exact path={"/contact"} component={Contact} />
      </Switch>      
    </>
  );
}

export default App;
