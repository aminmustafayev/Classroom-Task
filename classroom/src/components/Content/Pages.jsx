import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'

const Pages = ({ id }) => {
    return (
        <div>
            {id == 1 ? <Login /> : id == 2 ? <Register /> : <Login />}
        </div>
    )
}

export default Pages