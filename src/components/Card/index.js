import React from 'react'
import './index.css'
import Rating from '../Rating'
import Paper from '../Paper'

function Card(props) {
    return (
        <Paper type="card">
            <div className='card'>
                <p className='title'>{props.item.name}</p>
                <p className='subtitle'>{props.item.released}</p>
                <div className='img_container'> <img src={props.item.image}/></div>
                <div className='rating_container'>
                    <Rating rate={props.item.rated}/>
                </div>
            </div>
        </Paper>
    )
}

export default Card