import React from "react";
import "./PopularLocations.scss";
import Locations from "./Locations/Locations";
import ELondon from "@/app/assests/E-London.jpg"
import NLondon from "@/app/assests/N-London.jpg"
import NWLondon from "@/app/assests/NW-London.jpg"
import SELondon from "@/app/assests/SE-London.jpg"
import SWLondon from "@/app/assests/SW-London.jpg"
import WLondon from "@/app/assests/W-London.jpg"
import W1London from "@/app/assests/W1-London.jpg"
import WCLondon from "@/app/assests/WC-London.jpg"
import LondonImg from "@/app/assests/london-map.jpg"
import Image from "next/image";
import locationMark from "@/app/assests/location-mark.svg";
import eye from "@/app/assests/eye.svg";

export default function PopularLocations() {
    return (
        <div className="popular-container">
            <div className="left-popular-locations">
                <h1 className="left-popular-locations-heading">Popular Ad Spots
                    <br /> Locations - <span className="heading-uk">(United Kingdom)</span></h1>
                <div className="locations-grid">
                    <Locations locationImg={ELondon} locationName="E,London" spots="41 Ad Spots" />
                    <Locations locationImg={NLondon} locationName="N,London" spots="33 Ad Spots" />
                    <Locations locationImg={NWLondon} locationName="NW,London" spots="4 Ad Spots" />
                    <Locations locationImg={WCLondon} locationName="WC,London" spots="2 Ad Spots" />
                    <Locations locationImg={W1London} locationName="W1,London" spots="6 Ad Spots" />
                    <Locations locationImg={SELondon} locationName="SE,London" spots="19 Ad Spots" />
                    <Locations locationImg={SWLondon} locationName="SW,London" spots="21 Ad Spots" />
                    <Locations locationImg={WLondon} locationName="W,London" spots="7 Ad Spots" />
                </div>
            </div>

            <div className="right-popular-locations">
                <Image src={LondonImg} className="london-img" alt="London-Map"/>
                <div className="map-down-info">
                    <div className="map-down-row">
                        <div className="map-info-svg-box">
                            <Image src={locationMark} className="map-info-svg" alt="Location-mark"/>
                            <span className="map-uk-text">UK</span>
                        </div>
                        <div>
                            <h3 className="map-down-info-heading">173</h3>
                            <p className="map-down-info-para">Total UK Ad spots</p>
                        </div>
                    </div>

                    <div className="map-down-row">
                        <div className="map-info-svg-box">
                            <Image src={eye} className="map-info-svg" alt="eye-image"/>
                            <span className="map-uk-text">UK</span>
                        </div>
                        <div>
                            <h3 className="map-down-info-heading">183,474</h3>
                            <p className="map-down-info-para">UK Impressions reached yesterday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
