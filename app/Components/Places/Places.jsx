import React from "react";
import "./Places.scss";
import Image from "next/image";
import buildingSvg from "../../assests/building-svg.svg";

export default function Places({ names }) {
    return (
        <div className="places-name">
            <Image src={buildingSvg} alt="buildings" />
            <span className="places">{names}</span>
        </div>
    )
}
