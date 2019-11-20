import React from 'react'
import { NavLink } from "react-router-dom"

import "../../App.css";

export const LoginBar = () => {
    return (
        <div className="loginBar">
            <NavLink exact to='/login' activeClassName="activeNavButton" className="navLink" >Patient</NavLink>
            <NavLink exact to='/med_login' activeClassName="activeNavButton" className="navLink" >Medical</NavLink>
        </div>
    )
}
