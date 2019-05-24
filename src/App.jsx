import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Header from './Header'
import Footer from './Footer'
//import Conteudo1 from './Conteudo1'

export default props =>
  <BrowserRouter>
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>


