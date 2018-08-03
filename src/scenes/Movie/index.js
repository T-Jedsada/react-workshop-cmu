import React from 'react'
import ListMovieContainer from './containers/List'
import DetailMovieContainer from './containers/Detail'

function ListMovie() {
    return <ListMovieContainer/>
}

function DetailMovie() {
    return <DetailMovieContainer/>
}

export {ListMovie, DetailMovie}