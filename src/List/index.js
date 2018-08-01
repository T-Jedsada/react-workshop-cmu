import React from 'react'
import Item from '../Item'

function List({items}) {
    return(
        <div>
            { 
                items.map((value, index) => {
                    return (<Item value={value} key={index}/>)
                })
            }
        </div>
    )
}

export default List