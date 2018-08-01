import React, {Component} from 'react'

class ToggleView extends Component {

    state = {
        isShow : false
    }

    isShowView = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
                {this.state.isShow ? (<p>Show</p>) : (<p>Hide</p>)}
                <button onClick={this.isShowView}>Show Me The Money</button>
            </div>
        );
    }
}

export default ToggleView