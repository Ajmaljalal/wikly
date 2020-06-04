import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Spinner() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <FontAwesomeIcon icon='spinner' spin={true} size='3x'/>
        </div>
    )
}
