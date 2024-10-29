import React from "react";
import "./features.css"
import pineapple from "../image/pineapple.png"
import watermelon from "../image/watermelon.png"
import grape from "../image/grape.png"


export default function Features(){
    return <div className="feature-main">
        <section className="feature-body">
            <div className="feature-left">
                <h2>Why you should choose us?</h2>
                <p>Our commitment to excellence in the realm of juices sets us apart from the competition.</p>
            </div>
            <div className="feature-right">
                <div className="image-cont top-img"><img src={pineapple} alt="pineapple" /></div>
                <div className="image-cont"><img src={grape} alt="grape"  className="grapeimg"/></div>
                <div className="image-cont top-img"><img src={watermelon} alt="watermelon" className="watermelon"/></div>
            </div>
        </section>
    </div>
}