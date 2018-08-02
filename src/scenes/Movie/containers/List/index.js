import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import ListMovie from '../../component/List'

class ListMovieContainer extends Component {

    render() {
        return (
            <ListMovie />
        )
    }
}

export default withRouter(ListMovieContainer)