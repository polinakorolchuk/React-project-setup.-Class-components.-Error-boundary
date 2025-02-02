import React from "react";

interface CardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({name, imageUrl }) => {
    return (
        <div className="pokemon-card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

export default Card;