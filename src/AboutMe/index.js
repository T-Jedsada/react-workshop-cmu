import React from 'react'

function AboutMe( {match} ) {
    return <p>About { match.params.name }</p>
}

export default AboutMe