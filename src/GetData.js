import axios from 'axios';

const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;

async function GetData(endPoint) {
    try {
        const response = await axios.get(`${pokemonUrl}${endPoint}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(`Er is een fout opgetreden: ${error}`);
    }
}

export default GetData;