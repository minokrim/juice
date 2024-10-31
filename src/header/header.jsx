import React from "react";
import logo from "../image/logo.png";
import "./header.css";
export default function Header (){
    return <div className="nav-main">
    <section className="nav-body">
        <img src={logo} alt="logo" />
        <div className="nav-right">
        <div className="nav-options">
            <p>Home</p>
            <p>Features</p>
            <p>Menu</p>
            <p>Contact</p>
        </div>
        <button className="nav-button">Sign up</button>
        </div>
    </section>
    </div>
}