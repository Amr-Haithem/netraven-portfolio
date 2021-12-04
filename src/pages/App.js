import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import ProjectsPage from './ProjectsPage/ProjectsPage';

function App() {
  return (
<Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/ProjectsPage" component={ProjectsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
