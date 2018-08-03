import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import ListMovie from '../../component/List'

class ListMovieContainer extends Component {

    state = {
        movie: []
    }

    componentDidMount() {
        fetch("https://workshop-movie-api.herokuapp.com/movies")
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({
                    movie: json.movies
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onNavigateToDetail = id => {
        let { history } = this.props
        history.push('/movies/' + id)
    } 

    render() { 
        return (
            <ListMovie items = {this.state.movie} onNavigateToDetail={this.onNavigateToDetail}/>
        ) 
    }
}

export default withRouter(ListMovieContainer)