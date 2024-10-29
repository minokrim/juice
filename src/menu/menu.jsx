import React from "react";
import "./menu.css"
import heart from "../image/heart.png"
import mango from "../image/mango.png"
import kiwi from "../image/kiwi.png"
import rasberry from "../image/rasberry.png"
import arrow from "../image/arrow.png"


export default function Menu(){
    return <div className="menu-main">
        <section className="menu-body">
            <h2>Explore best menu Selections</h2>
            <section className="menu-options">
                <div className="menu-option-holder">
                    <div id="heart-holder">
                    <img src={heart} alt="heart" className="heart"/>
                    </div>

                    <div className="menu-img-holder">
                    <img src={mango} alt="mango" className="menu-img"/>
                    </div>

                    <div className="menu-img-desc">
                    <h3>Mango Bliss Burst</h3>
                    <h4>Description of the item</h4>
                    <p><span>$</span>10.00</p>
                    </div>
                    
                </div>
                <div className="menu-option-holder">
                    <div  id="heart-holder">
                    <img src={heart} alt="heart" className="heart"/>
                    </div>

                    <div className="menu-img-holder">
                    <img src={kiwi} alt="kiwi" className="menu-img"/>
                    </div>

                    <div className="menu-img-desc">
                    <h3>Mango Bliss Burst</h3>
                    <h4>Description of the item</h4>
                    <p><span>$</span>8.00</p>
                    </div>
                </div>
                <div className="menu-option-holder">
                    <div  id="heart-holder">
                    <img src={heart} alt="heart" className="heart"/>
                    </div>

                    <div className="menu-img-holder">
                    <img src={rasberry} alt="rasberry" className="menu-img"/>
                    </div>

                    <div className="menu-img-desc">
                    <h3>Mango Bliss Burst</h3>
                    <h4>Description of the item</h4>
                    <p><span>$</span>11.00</p>
                    </div>
                </div>
            </section>
        </section>
        <section className="menu-nav">
            <p>View all</p>
            <img src={arrow} alt="left arrow" />
        </section>
    </div>
}