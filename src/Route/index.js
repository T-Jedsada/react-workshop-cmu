import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home';
import AboutMe from '../AboutMe';

function Routes() {
    return (
        <div>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about-me/:name' component={AboutMe}/>
        </div>
    )
}

export default Routes