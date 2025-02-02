import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import PokemonService from "@services/pokemonService";
import Search from "./Search";
import CardList from "./CardList";
import "./App.css";  // Импортируем CSS файл

interface State {
    pokemons: { name: string; url: string }[];
    isLoading: boolean;
    error: string | null;
}

class App extends Component<{}, State> {
    state: State = {
        pokemons: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.loadPokemons();
    }

    async loadPokemons(searchQuery = "") {
        this.setState({ isLoading: true, error: null });
        try {
            const data = await PokemonService.fetchPokemonList(10, searchQuery);
            this.setState({ pokemons: data.results, isLoading: false });
        } catch (error) {
            this.setState({ error: "Не удалось загрузить покемонов", isLoading: false });
        }
    }

    handleSearch = (query: string) => {
        this.loadPokemons(query);
    };

    render() {
        const { pokemons, isLoading, error } = this.state;

        return (
            <ErrorBoundary>
                <h1>Поиск покемонов</h1>
                <Search onSearch={this.handleSearch} />
                {isLoading && <p>Загрузка...</p>}
                {error && <p className="error-message">{error}</p>} {/* Используем класс вместо inline стиля */}
                <CardList pokemons={pokemons} />
            </ErrorBoundary>
        );
    }
}

export default App;

