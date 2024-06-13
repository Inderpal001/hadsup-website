import React from "react";
import "./TechnologyWorks.scss";
import Cards from "./Cards/Cards";
import Card1Img from "@/app/assests/card1.jpg";
import Card2Img from "@/app/assests/card2.webp";
import Card3Img from "@/app/assests/card3.webp";

export default function TechnologyWorks() {
  return (
    <div className="technology-works-container">
        <div className="inner-technology-works-container">
            <h1 className="technology-works-heading">How Does HadsUp-AI <br />
            Technology Work?</h1>

            <div className="technology-row">
                <Cards img={Card1Img} heading="Watch & Detect" para="Our AI camera capture the viewer details from the location."/>
                <Cards img={Card2Img} heading="Analyzing" para="Our systems analyze AI camera data to determine audience composition."/>
                <Cards img={Card3Img} heading="Providing Real-Time Data" para="System provides real-time information based on the details of the audience."/>
            </div>
        </div>
    </div>
  )
}
