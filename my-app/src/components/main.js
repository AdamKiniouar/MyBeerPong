import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import OmOss from './omoss';



const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/omoss" component={OmOss} />
    </Switch>
)

export default Main;