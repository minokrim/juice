import React from "react";
import "./home.css"
import orange from "../image/orange.png"
export default function Home(){
    return <div className="home-main">
        <section className="home-body">
            <div className="home-left">
                <h1>Revitalize Your Routine, Fresh, Fruity, Fantastic!</h1>
                <p>"Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness. Get the best variety of juices here!”</p>
                <section className="home-button">
                    <button id="btn-1">View Menu</button>
                    <button id="btn-2">Discount</button>
                </section>
            </div>
            <div className="home-right">
                <img src={orange} alt="orange juice" loading="lazy"/>
            </div>
        </section>
    </div>
}