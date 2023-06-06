import React from "react";
import ImageCard from "./ImageCard";
import './CardList.css';

const CardList = ({ images }) => {
    return (
        <div className="card-list">
            {
                images.map(image => {
                    return (
                        <ImageCard 
                            key={image.id}
                            url={image.url}
                            title={image.title}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;