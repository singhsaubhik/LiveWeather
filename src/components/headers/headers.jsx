import React from 'react';
import "./headers.scss";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";


const Headers = (props) => {
    return (
        <div className="headers">
            <div className="headers__logo">
                <Logo className="headers__logo-svg" />
                <h3 className="headers__logo-appname">Live Weather</h3>
            </div>

            <div className="headers__buttons">
                <NavLink to="/home" className="headers__buttons-btn">Home</NavLink>
                <NavLink to="/add-city" className="headers__buttons-btn">Add City</NavLink>
                <NavLink to="/about" className="headers__buttons-btn">About</NavLink>
            </div>
        </div>
    );
};

export default Headers;
