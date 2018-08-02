import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login';
import Movie from '../Movie';

function Routes() {
    return (
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/movies" component={Movie}/>
        </div>
    )
}

export default Routes