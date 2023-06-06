import React from "react";
import './ImageCard.css';

const ImageCard = ({ id, title, url }) => {
    return (
        <div key={id} className='card-container tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={url} alt='' width='100px' height='100px'/>
            <p >{title}</p>
        </div>
    );
}

export default ImageCard;