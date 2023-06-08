import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MorePokemon from "./MorePokemon";
import PokemonCard from "./PokemonCard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home pokemon="pikachu" />} />
                <Route path="/morePokemon" element={<MorePokemon/>} />
                <Route path="/pokemon/:name" element={<PokemonCard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;