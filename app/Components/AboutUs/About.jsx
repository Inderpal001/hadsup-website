import React from "react";
import "./About.scss"
import Image from "next/image";
import aboutImg from "@/app/assests/about-img.webp";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-inner-container">
        <div className="left-about">
          <h6 className="small-about-heading">About Us</h6>
          <h1 className="large-about-heading">Revolutionary Ad-Tech Platform</h1>
          <p className="about-para">HadsUp is an Online Marketplace for Out Of Home Advertisers. Connecting Out Of Home locations wanting to rent out their advertising spots with advertisers looking for advertising spaces in specific locales.</p>
          <button className="about-large-btn">How HeadsUp Work ?</button>
        </div>
        <div className="right-about">
          <Image src={aboutImg} className="about-img" alt="Laptop-Image"/>
        </div>
      </div>
    </div>
  )
}
