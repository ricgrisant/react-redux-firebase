import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) =>{
    return (

        <ul className="right">
            <li><NavLink to= '/createproject'>New project</NavLink></li>
            <li><a onClick= {props.signOut}>Log Out</a></li>
            <li><NavLink to= '/' className="btn btn-floating green lightn-1">RG</NavLink></li>      
        </ul>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (reducer) =>{
    return
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
