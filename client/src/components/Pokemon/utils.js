import axios from 'axios';

import { isLoading, isLoaded } from '@/reducers/general/loading';
import { addAlertItem } from '@/utils/notifications';

import { BASE_POKEMON_URI } from './constants';

export const getAllPokemons = async (dispatch, setPokemones) => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${BASE_POKEMON_URI}`);
    setPokemones(res.data.results);
  } catch (err) {
    dispatch(isLoaded());
    addAlertItem(dispatch, 'Something went wrong, please try again!', 'error');
    console.log(err);
  }
};

export const getDetailsOfAPokemon = async (dispatch, pok, oldData, hideLoading) => {
  try {
    const detail = { name: pok.name };
    const res = await axios.get(`${BASE_POKEMON_URI}${pok.name}/`);
    const types = [];
    res.data.types.forEach((item) => {
      types.push(item.type.name);
    });
    detail.types = types;
    detail.image_url = res.data.sprites.front_default;
    if (hideLoading) {
      dispatch(isLoaded());
    }
    let newData = [...oldData, detail];
    return newData;
  } catch (err) {
    console.log(err);
    return oldData;
  }
};

export const getPreparedData = async (dispatch, pokemones) => {
  const localData = [];
  let count = 1;
  for (const p of pokemones) {
    count += 1;
    localData = await getDetailsOfAPokemon(dispatch, p, localData, count === pokemones.length);
  }
  return localData;
};

export const prepareData = async (dispatch, pokemones, setPreparedData) => {
  const res = await getPreparedData(dispatch, pokemones);
  setPreparedData(res);
};

export const savePokemonHandler = (pokemon, setBodyData, setSendSavePokemonReq) => {
  setBodyData({
    name: pokemon.name,
    type: pokemon.types.sort(),
    image_url: pokemon.image_url
  });
  setSendSavePokemonReq(true);
};

export const headLines = [
  {
    value: 'name',
    display: 'Name',
    width: 220,
    hasSearch: true,
    isSortable: true
  },
  {
    value: 'types',
    display: 'Types',
    width: 220,
    hasSearch: true,
    isSortable: true
  },
  {
    value: 'image',
    display: 'Image',
    width: 200
  },
  {
    value: 'button',
    display: 'Save',
    width: 100
  }
];
