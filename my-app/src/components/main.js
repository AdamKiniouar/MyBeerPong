import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import OmOss from './omoss';
import boka from './boka';
import regler from './regler';



const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/omoss" component={OmOss} />
        <Route path="/boka" component={boka} />
        <Route path="/regler" component={regler} />
    </Switch>
)

export default Main;