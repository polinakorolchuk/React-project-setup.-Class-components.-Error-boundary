import React, { Component } from "react";
import PokemonService from "../../services/pokemonService";
import "./PokemonList.css";

interface Pokemon {
    name: string;
    url: string;
}

interface State {
    pokemons: Pokemon[];
    isLoading: boolean;
    error: string | null;
}

export default class PokemonList extends Component<{}, State> {
    state: State = {
        pokemons: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.loadPokemons();
    }

    private async loadPokemons() {
        this.setState({ isLoading: true, error: null });

        try {
            const data = await PokemonService.fetchPokemonList(10);
            this.setState({ pokemons: data.results, isLoading: false });
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Ошибка при получении данных:", error.message);
                this.setState({ error: error.message, isLoading: false });
            } else {
                this.setState({ error: "Неизвестная ошибка", isLoading: false });
            }
        }
    }

    render() {
        const { pokemons, isLoading, error } = this.state;

        return (
            <div>
                <h2>Список покемонов:</h2>
                {isLoading && <p>Загрузка...</p>}
                {error && <p className="errorMessage">{error}</p>}
                <ul>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

