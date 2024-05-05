import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import TeacherTask from '../Task/TeacherTask'

const Pages = ({ id }) => {
    return (
        <div>
            {id == 1 ? <Login /> : id == 2 ? <Register /> : <TeacherTask/>}
        </div>
    )
}

export default Pages