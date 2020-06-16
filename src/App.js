import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, BrowserRouter as Router,Switch, NavLink} from 'react-router-dom';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import Home from './components/home/Home'
import Menu from './components/navbar/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Skill from './components/skill/Skill'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



class App extends Component {
  render() {
    return (
    
    <Router>
    
    <div>
      <Menu />
      
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/education" component={Education}/>
      <Route path="/skill" component={Skill}/>

      <div className="container">
      
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Project}/>
      <Route path="/contact" component={Contact}/>
      </div>
      </Switch>
      <Footer />


    </div>
    
    </Router>
     
    )
  }
}


export default App;


     
