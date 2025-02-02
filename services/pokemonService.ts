export default class PokemonService {
    private static API_URL = "https://pokeapi.co/api/v2/pokemon";

    static async fetchPokemonList(limit: number = 10, searchQuery: string = "") {
        try {
            const response = await fetch(`${this.API_URL}?limit=${limit}&search=${searchQuery}`);
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
            throw error;
        }
    }

    static async fetchPokemon(name: string) {
        try {
            const response = await fetch(`${this.API_URL}/${name}`);
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
            throw error;
        }
    }
}
