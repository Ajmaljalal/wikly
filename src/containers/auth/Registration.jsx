import React, { Component } from 'react'

export default class Registration extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm Password' />
                <button>Register</button>
            </div>
        )
    }
}
