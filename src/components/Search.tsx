import React, { useState } from "react";

interface SearchPops {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchPops> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
        localStorage.setItem("searchQuery", query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Идет поиск"
            value={query}
            onChange={handleChange}
            />
            <button type="submit">Найти</button>
        </form>
    );
};

export default Search;