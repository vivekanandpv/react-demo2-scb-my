import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Customer from './Customer';

const Layout = (props) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container pt-3'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/customer/:id' exact component={Customer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Layout;
