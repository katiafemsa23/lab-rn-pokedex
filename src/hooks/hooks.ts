import axios from 'axios';
import {useEffect, useState} from 'react';
const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

/** get pokemons custom hook */
export const useFetch = (endpoint: string) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(endpoint);
        setData(response.data);
      } catch (error) {
        throw new Error('Error when consulting list of pokemons!');
      }
    };
    fetchData();
  }, [endpoint]);

  return data;
};
