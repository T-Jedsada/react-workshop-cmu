import React, {Component} from 'react'

class Header extends Component {

    state = {
        name: "",
        des: ""
    }

    componentDidMount() {
        console.log("component create")
    }

    componentDidUpdate() {
        console.log("component update")
    }

    onChangeHeader = () => {
        this.setState({
            name: "Chiang Mai"
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