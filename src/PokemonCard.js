import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetData from "./GetData";

function PokemonCard() {
    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await GetData(`${name}`);
            setPokemonData(data);
            setIsLoading(false);
        }
        fetchData();
    }, [name]);

    if (isLoading || !pokemonData) return "Loading...";

    return (
        <>
            <h1>{pokemonData.name}</h1>
            {/* Voeg hier de andere gegevens van de Pokémon toe */}
        </>
    );
}

export default PokemonCard;
