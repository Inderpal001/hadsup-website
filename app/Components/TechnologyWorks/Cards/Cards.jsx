import React from 'react';
import "./Cards.scss";
import Image from 'next/image';

export default function Cards({img,heading,para}) {
  return (
    <div className='card'>
        <Image src={img} className='card-img'/>
        <h1 className='card-heading'>{heading}</h1>
        <p className='card-para'>{para}</p>
    </div>
  )
}
