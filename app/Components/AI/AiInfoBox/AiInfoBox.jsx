import React from 'react';
import "./AiInfoBox.scss";

export default function AiInfoBox({ icon,para }) {
    return (
        <div className='info-box'>
            <div className="icon-div">
                {icon}
            </div>
            <p className='info-box-para'>{para}</p>
        </div>
    )
}
