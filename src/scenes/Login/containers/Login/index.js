import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Login from '../../component/Login'

class LoginContainer extends Component {

    state = {
        username: "",
        isValid: false
    }

    onSubmit = () => {
        const { history } = this.props
        if (this.state.isValid) {
            history.push('/movies')
        }
    }

    onInputChange = event => {
        const username = event.target.value;
        this.setState({
            username: username,
            isValid: username ? true : false
        })
    }

    render() {
        return (
            <Login 
                onClick={this.onSubmit} 
                isValid={this.state.isValid} 
                username={this.state.username} 
                onInputChange={this.onInputChange}
            />
        )
    }
}

export default withRouter(LoginContainer)