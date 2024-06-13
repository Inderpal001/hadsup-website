"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Banner.scss";
import Places from "../Places/Places";
import MiuiCalendar from "../MiuiCalendar/MiuiCalendar";
import LowerBanner from "./LowerBanner/LowerBanner";

export default function Banner() {

  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-heading">Find Your Ad Spots</h1>
          <h3 className="banner-small-heading">Advertise in your local</h3>

          <div className="banner-input-box-div">
            <div className="up-row">
              <div className="banner-input-box">
                <p className="banner-input-text">I want to advertise in...</p>
                <input type="text" className="banner-input left-banner-input border-left-radius" placeholder="Search Ad Spots..." />
                <div className="place-suggestions">
                  <p className="place-heading">Popular Locations</p>
                  <div className="places-grid">
                    <Places names="E, London" />
                    <Places names="N, London" />
                    <Places names="NW, London" />
                    <Places names="WC, London" />
                    <Places names="W1, London" />
                    <Places names="SE, London" />
                    <Places names="SW, London" />
                    <Places names="W, London" />
                  </div>
                </div>
              </div>
              <div className="banner-input-box">
                <p className="banner-input-text right-banner-input-text">My campaign will run...</p>
                <MiuiCalendar/>
              </div>
            </div>

            <div className="down-row">
              <p className="banner-input-text">Advanced Filter</p>
              <button disabled className="banner-search-btn">Search</button>
            </div>
          </div>

        </div>
      </div>

      <LowerBanner />
    </>
  );
}
