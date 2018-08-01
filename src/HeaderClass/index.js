import React, {Component} from 'react'

class Header extends Component {

    state = {
        name: "",
        des: ""
    }

    onChangeHeader = () => {
        this.setState({
            name: "20Scoops"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.onChangeHeader}>Click Me!</button>
            </div>
        );
    }
}

export default Header