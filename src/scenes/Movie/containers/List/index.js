import React, {
    Component
} from 'react'
import {
    withRouter
} from 'react-router-dom'
import ListMovie from '../../component/List'

class ListMovieContainer extends Component {

    state = {
        movie: [{
                "name": "The Shawshank Redemption",
                "released": "1994",
                "rated": 9.2,
                "id": 1,
                "image": "https://workshop-movie-api.herokuapp.com/images/1.jpg"
            },
            {
                "name": "The Godfather",
                "released": "1972",
                "rated": "9.2",
                "id": 2,
                "image": "https://workshop-movie-api.herokuapp.com/images/2.jpg"
            },
            {
                "name": "The Godfather: Part II",
                "released": "1974",
                "rated": 9,
                "id": 3,
                "image": "https://workshop-movie-api.herokuapp.com/images/3.jpg"
            }

        ]
    }

    render() {
        return (<ListMovie items = {this.state.movie}/>)
    }
}

export default withRouter(ListMovieContainer)