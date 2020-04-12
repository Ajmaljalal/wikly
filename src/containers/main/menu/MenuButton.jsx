import React from 'react'
import { Link } from 'react-router-dom'

function MenuButton({icon, path}) {
    return (
        <Link to={path}>
            <img src={icon} alt={path}/>
        </Link>
    )
}
export default  MenuButton
