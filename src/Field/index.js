import React, {Component} from 'react'

class Field extends Component {

    state = {
        value : '',
        isValid: false
    }

    onFieldChange = event => {
        const value = event.target.value
        this.setState({
            value: value
        })

        this.setState({
            isValid: value ? true : false
        })
    }

    onClearTextInput = () => {
        this.setState({
            value: ''
        })
    }

    render() {
        const {isValid} = this.state
        return (
            <div>
                <p>Value: {this.state.value}</p>
                <input onChange={this.onFieldChange} value={this.state.value}/>
                <br/>
                {!isValid && <font style={{color: 'red'}} size="2">This field require</font>}
                <br/>
                <button onClick={this.onClearTextInput}>Clear Text</button>
            </div>
        );
    }
}

export default Field