import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Conteudo1 from './Conteudo1'
import Conteudo2 from './Conteudo2'
import Conteudo3 from './Conteudo3'

export default props =>
    <Switch>
        <Route exact path='/' componet={Conteudo1} />
        <Route path='/conteudo2' componet={Conteudo2} />
        <Route path='/conteudo3' componet={Conteudo3} />
        <Redirect from='*' to='/'/>
    </Switch>