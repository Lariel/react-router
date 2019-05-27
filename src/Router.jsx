import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Conteudo1 from './Conteudo1'
import Conteudo2 from './Conteudo2'
import Conteudo3 from './Conteudo3'

export default props =>
    <Switch>
        <Route path='/' exact component={Conteudo1} />
        <Route path='/conteudo2' component={Conteudo2} />
        <Route path='/conteudo3' component={Conteudo3} />
        <Redirect from='*' to='/'/>
    </Switch>