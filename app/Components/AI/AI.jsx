"use client"

import React from "react";
import "./AI.scss";
import AIImg from "@/app/assests/ai-img.jpg"
import Image from "next/image";
import AiInfoBox from "./AiInfoBox/AiInfoBox";
import { FaPlugCircleMinus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { LiaChartPieSolid } from "react-icons/lia";
import { MdOutlineLock } from "react-icons/md";
import { LuLineChart } from "react-icons/lu";
import { IoArrowRedoOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import preLoader from "@/app/Animations/pluse-loader.json";

export default function AI() {
  return (
    <div className="ai-container">
      <div className="ai-inner-container">
        <div className="left-ai-container">
          <h1 className="left-ai-heading">Powered by AI</h1>
          <p className="left-ai-para">Our AI technology generates the data with the cameras mounted on each screen provides real-time data on who (groups) are engaging with their products. The system can leverage this data into accessible insights.</p>
        </div>

        <div className="right-ai-container">
          <div className="right-img-container">
            <div className="img-box">
              <Image src={AIImg} alt="HeadsUp" className="ai-img" />
            </div>

            <Lottie className="pre-loader" animationData={preLoader} loop={true} />
            <div className="first-info-box"><AiInfoBox icon={<FaPlugCircleMinus />} para="Plug-and-play" /></div>
            <div className="second-info-box"><AiInfoBox icon={<CgProfile />} para="Age, gender, and head pose estimation" /></div>
            <div className="third-info-box"><AiInfoBox icon={<LiaChartPieSolid />} para="Viewers vs. Impressions" /></div>
            <div className="fourth-info-box"><AiInfoBox icon={<MdOutlineLock />} para="Privacy by default: face blurring" /></div>
            <div className="fifth-info-box"><AiInfoBox icon={<LuLineChart />} para="Attention vs Dwell Time" /></div>
            <div className="sixth-info-box"><AiInfoBox icon={<IoArrowRedoOutline />} para="Data shareable with multiple endpoints" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
