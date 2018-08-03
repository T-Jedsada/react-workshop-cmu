import React from 'react'
import './index.css'
import Rating from '../Rating'
import Paper from '../Paper'

function Card(props) {
    let item = props.item
    return (
        <Paper type="card">
            <div className='card'>
                <p className='title'>{item.name}</p>
                <p className='subtitle'>{item.released}</p>
                <div className='img_container'> <img src={item.image}/></div>
                <div className='rating_container'>
                    <Rating rate={item.rated}/>
                </div>
            </div>
        </Paper>
    )
}

export default Card