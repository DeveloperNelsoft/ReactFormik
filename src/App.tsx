import React from "react";
import Home from './pages/containers/Home'
import SearchMovie from './pages/containers/SearchMovie'
import About from './pages/containers/About'
import { Header } from './pages/components/Header'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/about/:id" exact component={About}/>
          <Route path="/searchMovie" exact component={SearchMovie}/>
          <Route path="/" exact component={Home}/>
          <Route exact component={()=><h1>404</h1>}/>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;

