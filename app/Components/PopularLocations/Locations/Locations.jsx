import Image from "next/image";
import React from "react";
import "./Locations.scss"

export default function Locations({ locationImg, locationName, spots }) {
  return (
    <div className="location">
      <div className="location-img-div">
        <Image src={locationImg} className="location-img" alt="London Image" />
      </div>
      <div>
        <h3 className="location-name">{locationName}</h3>
        <p className="spots">{spots}</p>
      </div>
    </div>
  )
}
