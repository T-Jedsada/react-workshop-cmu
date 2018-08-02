import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <p><Link to="home">Home</Link></p>
            <Link to="about-me">About Me</Link>
        </div>
    )
}

export default Menu