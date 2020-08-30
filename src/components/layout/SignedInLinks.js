import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


const SignedInLinks = () =>{
    return (

        <ul className="right">
            <li><NavLink to= '/createproject'>New project</NavLink></li>
            <li><NavLink to= '/'>Log Out</NavLink></li>
            <li><NavLink to= '/' className="btn btn-floating green lightn-1">RG</NavLink></li>      
        </ul>

    )
}

export default SignedInLinks;
