import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'


function App() {
  return (
    <div class="App">
      
      <BrowserRouter>
        <Navbar/>
        <Switch /* We use the switch tag to only load one component (lesson #32) */> 
          <Route path='/quote-generator' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
    
    </BrowserRouter>
      
    </div>
  );
}

export default App;
