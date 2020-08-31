import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login/loginstuff'
import Nav from './components/nav/Nav'
import HeroTitle from './components/herotitle/herotitle'
import HeroImage from './components/heroimage/heroimage'
import UserDash from './components/pages/dash'
import Page2 from './components/pages/page2'
import Page3 from './components/pages/page3'
import Signup from './components/pages/signup'
import User from './components/pages/user'
import Globe from './components/pages/map'
import Travel from './components/pages/travel'


class App extends Component {

  constructor() {
    super()
    this.state = {
      names: [

      ]
    };
  }
  // Basically what this does below is when the component known as Main is rendered, everything inside of the function is what is going to happen.
  // Pretty much just like when you res.render a page and then you send data in express. 
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ names: users }))
  // }

  render() {
    return (
      <Router>
      <div className='Main'>
        <Nav></Nav>
        <Route exact path= '/' component = {Login} />
        <Route exact path='/page1' render = {props =>(
          <React.Fragment>
            <HeroTitle></HeroTitle>
            <HeroImage></HeroImage>
            <h1 className='number'>01</h1>
            {this.state.names.map(name => <h1 key={name.user}> {name.name} </h1>)}
          </React.Fragment>
        )}/>
        <Route path= '/page2' component= {Page2} />
        <Route path= '/page3' component= {Page3} />
        <Route path = '/signup' component={Signup}/>
        <Route path='/dash' component={UserDash}/>
        <Route path='/user' component={User}/>
      </div>
      </Router>
    )
  }

  
}

export default App;
