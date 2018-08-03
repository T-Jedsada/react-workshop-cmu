import React from 'react'
import './index.css'
import '../../../../components/Card'
import Card from '../../../../components/Card';

function List(props) {
    return (
        <div className='movie-list'>
            { props.items.map(item => {
                return (
                    <div className='movie-list-item'><Card item={item}/></div>
                )
            }) }
        </div>
    )
}

export default List