import React from "react";
import "./body.css";
import Home from "../home/home";
import Features from "../features/features";
import Menu from "../menu/menu";
import Contact from "../contact/contact";
import Navigation from "../nav/nav";
export default  function Body(){
    return <div className="body-main">
        <Navigation/>
        <Home/>
        <Features/>
        <Menu/>
        <Contact/>
    </div>
}