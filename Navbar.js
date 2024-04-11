import React from 'react';
import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    // let myStylenav={
    // color:'red',
    // backgroundColor:'black'
    // }
    // let myStylehomeandabout={
    //   color:'white'
    // }
    return ( <
        nav className = { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <
        div className = "container-fluid" >
        <
        li className = "navbarbrand"
        href = "" > { props.title } < /li> <
        button className = "navbar-toggler"
        type = "button"
        data_bs_toggle = "collapse"
        data_bs_target = "#navbarSupportedContent"
        aria_controls = "navbarSupportedContent"
        aria_expanded = "false"
        aria_label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span> <
        /button> <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        li className = "nav-link active"
        aria_current = "page"
        href = "#" > { props.Home } < /li> <
        /li> <
        li className = "nav-item" >
        <
        li className = "nav-link"
        href = "#" > { props.about } < /li> <
        /li>

        <
        /ul> {
            /* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria_label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */
        } <
        div className = { `form-check form-switch text-${props.mode==='light'?'dark':'light'}` } >
        <
        input className = "form-check-input"
        onClick = { props.toggleMode }
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckDefault" / >
        <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckDefault" > enable dark mode < /label> <
        /div> <
        /div> <
        /div> <
        /nav>  

    )
}
// Proptype Written the  type of prop and give error if we use anothe prop 
Navbar.propTypes = {
        title: propTypes.string.isRequired,
        about: propTypes.string.isRequired
    }
    // Defaultprop return default Value if we pass nothing
Navbar.defaultProps = {
    title: 'Set title here',
    Home: 'Set Home',
    about: 'About '

};