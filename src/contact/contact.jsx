import React from "react";
import "./contact.css"
import logo from "../image/logo.png"
import call from "../image/call.png"
import email from "../image/email.png"
import fb from "../image/fb.png"
import ig from "../image/ig.png"
import x from "../image/tweet.png"
import youtube from "../image/youtube.png"
export default function Contact(){
    return <div className="contact-main">
        <section className="contact-body">
            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>Send us a message</p>
                <form action="/submit">
                <input type="text" placeholder="full name" className="name"/>
                <input type="text" name="" placeholder="Your email" className="email"/>
                <input type="text" placeholder="Your message..." className="message"/>
                </form>
                <button>Submit</button>
            </div>
            <div className="sitemap">
                <h2>Sitemap</h2>
                <p>All of our pages</p>
                <ul className="footer-options">
                    <li>- Home</li>
                    <li>- About Us</li>
                    <li>- Service</li>
                    <li>- Blog</li>
                    <li>- Contact Us</li>
                </ul>
            </div>
            <div className="footer-details">
                <img src={logo} alt="" />
                <div className="phone footer-det">
                    <img src={call} alt="" />
                    <h4>(08) 400 2000</h4>
                </div>
                <div className="email footer-det">
                    <img src={email} alt="" />
                    <h4>xyz@gmail.com</h4>
                </div>
            </div>
        </section>
        <section className="socials">
            <div className="socials-holder">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={x} alt="" />
            <img src={youtube} alt="" />
            </div>
            <p>Copyright 2023 Dscode | All rights reserved</p>
        </section>
    </div>
}