import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {PokemonList} from '../components/PokemonList';
import { useFetch } from '../hooks/hooks';
import { usePokedex } from '../context/context';
import { useEffect } from 'react';

export type DataT = {
  name: string;
  url: string;
};

const pokemonsList: DataT[] = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
];

export const HomeScreen = () => {
  const {state, dispatch} = usePokedex();
  const data = useFetch('pokemon?limit=151');
  
  useEffect(() => {
    if (data) {
        dispatch({type: 'ADD_POKEMONS', payload: data.results});
    }
  }, [data, dispatch]);
  return (
    <>
      <SafeAreaView>
        <PokemonList data={state.Pokemons} />
      </SafeAreaView>
    </>
  );
};
