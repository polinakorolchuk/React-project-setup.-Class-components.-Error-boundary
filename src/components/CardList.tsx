import React from "react";
import Card from "./Card";

interface Pokemon {
    name: string;
    url: string;
}
interface CardListProps {
    pokemons: Pokemon[];
}

const CardList: React.FC<CardListProps> = ({ pokemons }) => {
    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => {
                const id = pokemon.url.split("/").slice(-2, -1)[0]; // Получаем ID из URL
                return <Card key={pokemon.name} name={pokemon.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />;
            })}
        </div>
    );
};

export default CardList;