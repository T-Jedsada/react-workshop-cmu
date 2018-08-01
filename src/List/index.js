import React from 'react'
import Item from '../Item'

function List({items}) {
    return(
        <div>
            { 
                items.map((value) => {
                    return (<Item value={value}/>)
                })
            }
        </div>
    )
}

export default List