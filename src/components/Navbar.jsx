import React, { Component } from 'react';

//Stateless Funcional Component
//Add props as parameter in functional components.
//Argument destructred by passing in the component directly as a parameter such as "{totalCounters}".
const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "} 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );    
};

export default Navbar;