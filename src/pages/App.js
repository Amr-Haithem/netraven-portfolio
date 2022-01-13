import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactMe from './ContactMePage/contact_me';
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
          <Route path="/ContactMe" component={ContactMe}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
