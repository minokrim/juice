import React from "react";
import "./nav.css"
import logo from "../image/logo.png"
// import hamburger from "../image/more.png"
export default function Nav(){
    // const [mobileNav,setMobileNav]=useState(false)
    // function showNav(){
    //     setMobileNav(!mobileNav)
    // }

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

        {/* <section className="mobile-nav-body">
        <img src={logo} alt="logo" />
            <img src={hamburger} alt="" className="hamburger" onClick={showNav}/>
        </section>

        {mobileNav && (
            <div className="mobile-nav-options" onClick={showNav}>
                <p>Home</p>
                <p>Features</p>
                <p>Menu</p>
                <p>Contact</p>
                <button>Sign up</button>
            </div>
        )} */}
    </div>
}