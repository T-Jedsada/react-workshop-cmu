import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <p><Link to="/home">Home</Link></p>
            <p><Link to="/about-me/a">About A</Link></p>
            <p><Link to="/about-me/b">About B</Link></p>
            <p><Link to="/about-me/c">About C</Link></p>
        </div>
    )
}

export default Menu