import React from "react";
import "./body.css";
import Home from "../home/home";
import Nav from "../nav/nav";
import Features from "../features/features";
import Menu from "../menu/menu";
import Contact from "../contact/contact";
export default  function Body(){
    return <div className="body-main">
        <Nav/>
        <Home/>
        <Features/>
        <Menu/>
        <Contact/>
    </div>
}