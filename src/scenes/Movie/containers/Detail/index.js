import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import DitailMovie from '../../component/Detail'
import ReactModal from 'react-modal'

class DetailMovieContainer extends Component {

    state = {
        data:{},
        isOpenDialog: false
    }

    onBackPressed = () => {
        this.props.history.goBack()
    }

    onShowDialog = () => {
        this.setState({
            isOpenDialog: true
        })
    }

    onDismissDialog = () => {
        this.setState({
            isOpenDialog: false
        })
    }

    componentDidMount() {
        let movieId = this.props.match.params.id
        fetch("https://workshop-movie-api.herokuapp.com/movies/"+movieId)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json.movie)
                this.setState({
                    data: json.movie
                })
                console.log(this.state.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() { 
        let state = this.state
        return (
            <div>
                <DitailMovie item={state.data} onBackPressed={this.onBackPressed} onShowDialog={this.onShowDialog}/>
                <ReactModal 
                    className='modal-content'
                    overlayClassName='modal-overlay'
                    isOpen={state.isOpenDialog} 
                    onRequestClose={this.onDismissDialog}>
                        <h3>Detail</h3>
                        <p>{state.data.description}</p>
                </ReactModal>
            </div>
        ) 
    }
}

export default withRouter(DetailMovieContainer)