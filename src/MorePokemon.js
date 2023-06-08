import React, { useState, useEffect } from 'react';
import GetData from "./GetData";
import {Link} from "react-router-dom";

function MorePokemon() {
    const [offset, setOffset] = useState(0);
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const limit = 20;

    const handlePreviousPage = () => {
        if (offset - limit >= 0) {
            setOffset(offset - limit);
        }
    };

    const handleNextPage = () => {
        setOffset(offset + limit);
    };

    useEffect(() => {
        setIsLoading(true);
        GetData(`?limit=${limit}&offset=${offset}`)
            .then(data => {
                setPokemonData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Er is een fout opgetreden: ", error);
                setIsLoading(false);
            });
    }, [offset, limit]);

    if (isLoading) return "Loading...";

    return (
        <>
            <h1>Pokémon List</h1>
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
            {pokemonData && pokemonData.results && pokemonData.results.map(pokemon => (
                <ul key={pokemon.name}>
                    <li>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                </ul>
            ))}
        </>
    );
}

export default MorePokemon;
