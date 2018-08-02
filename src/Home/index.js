import React from 'react'
import ToggleView from '../ToggleView'
import List from '../List'
import Field from '../Field'

function Home() {
    return (
        <div style={{margin:10}}>
            <ToggleView/>
            <List items={[
                "Apple",
                "Avocado",
                "Banana",
                "Kiwi"
            ]}/>
            <Field/>
        </div>
    )
}

export default Home