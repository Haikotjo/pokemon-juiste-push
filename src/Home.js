import React from 'react';
import GetData from "./GetData";

function Home({pokemon}) {
    const { data: pokemonData, isLoading } = GetData(pokemon);

    if (isLoading) return "Loading...";
    return (
        <>
            <h1>{pokemonData.name}</h1>
        </>    );
}

export default Home;