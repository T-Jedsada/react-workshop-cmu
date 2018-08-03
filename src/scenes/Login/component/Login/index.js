import React from 'react'
import './index.css'
import Paper from '../../../../components/Paper'
import Field from '../../../../components/Field'
import Button from '../../../../components/Button'

function Login(props) {
    return (
        <div className="login">
            <Paper type="login">
                <h1>Login</h1>
                <div className="field-wrapper">
                    <Field value={props.username} onChange={props.onInputChange}/>
                </div>
                {!props.isValid && <p className="error">This field is required.</p>}
                <Button text="Submit" primary={props.isValid} onClick={props.onClick}/>
            </Paper>
        </div>
    )
}

export default Login