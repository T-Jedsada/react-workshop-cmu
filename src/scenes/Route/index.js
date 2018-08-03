import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login';
import { ListMovie, DetailMovie } from '../Movie';

function Routes({setUsername}) {
    return (
        <div>
            <Route exact path="/login" render={() => <Login setUsername={setUsername}/>}/>
            <Route exact path="/movies" component={ListMovie}/>
            <Route exact path="/movies/:id" component={DetailMovie}/>
        </div>
    )
}

export default Routes