import React from 'react';
import {Link} from 'react-router-dom'

export default props=>
    <div className="header">
      <h1>Header</h1>
      <Link to="/">
        | Conteúdo1 |
      </Link>
      <Link to="/conteudo2">
        | Conteúdo2 |
      </Link>
      <Link to="/conteudo3">
        | Conteúdo3 |
      </Link>
    </div>
            
        