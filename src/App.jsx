import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Header from './Header'
import Footer from './Footer'
//import Conteudo1 from './Conteudo1'

export default props =>
  <BrowserRouter>
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  </BrowserRouter>


