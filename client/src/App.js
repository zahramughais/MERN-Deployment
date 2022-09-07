import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './views/Details';
import Edit from './views/Edit';
import Main from './views/Main';
import New from './views/New';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/pets/new'>
            <New />
          </Route>
          <Route exact path='/pets/:id/edit'>
            <Edit />
          </Route>
          <Route exact path='/pets/:id'>
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
