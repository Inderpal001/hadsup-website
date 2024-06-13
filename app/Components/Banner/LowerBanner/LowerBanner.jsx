import React from "react";
import Lottie from "lottie-react";
import Advertisement from "@/app/Animations/Advertisement.json";
import Impression from "@/app/Animations/Impression.json";
import "./LowerBanner.scss";

export default function LowerBanner() {
  return (
    <div className="lower-banner-container">
      <h1 className="lower-banner-heading">We Grow in <span className="colored-lower-banner-heading">Locals</span></h1>
      <div className="lower-banner-row">
        <div className="lower-banner-inside-row">
          <div className="animation-box">
            <Lottie animationData={Advertisement} loop={true} />
          </div>
          <div className="lower-banner-text-box margin-top">
            <h1 className="lower-banner-big-text">173</h1>
            <h3 className="lower-banner-small-text">Active Ad Spots</h3>
          </div>
        </div>

        <div className="lower-banner-inside-row">
          <div className="animation-box2">
            <Lottie animationData={Impression} loop={true} />
          </div>
          <div className="lower-banner-text-box">
            <h1 className="lower-banner-big-text">183,617</h1>
            <h3 className="lower-banner-small-text">Impressions Reached Out Yesterday</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
