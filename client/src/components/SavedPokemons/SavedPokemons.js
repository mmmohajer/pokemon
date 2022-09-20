import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Image } from 'basedesign-iswad';

import Scroll from '@/baseComponents/Scroll';
import Table from '@/baseComponents/Table';

import { POKEMON_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import { headLines } from './utils';
import { SCROLLABLE_ELEMENT_ID, SCROLLABLE_CONTENT_ID } from './constants';
import styles from './SavedPokemons.module.scss';

const SavedPokemons = () => {
  const dispatch = useDispatch();

  const [pokemones, setPokemones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [updateRefs, setUpdateRefs] = useState(true);

  const [sendGetPokemonReq, setSendGetPokemonReq] = useState(false);
  const { data: pokemonData, error: pokemonError } = useApiCalls({
    sendReq: sendGetPokemonReq,
    setSendReq: setSendGetPokemonReq,
    method: 'GET',
    url: POKEMON_API_ROUTE,
    showLoading: true
  });
  useEffect(() => {
    if (pokemonData) {
      setPokemones(pokemonData);
    }
  }, [pokemonData]);

  useEffect(() => {
    setSendGetPokemonReq(true);
  }, []);

  const data = useMemo(() => {
    if (pokemones?.length) {
      const localData = [];
      pokemones.forEach((item) => {
        let currentDetails = {
          name: item.name
        };
        let curTypesVal = '';
        let curTypesDisplay = '';
        let count = 1;
        item.types?.sort()?.forEach((type) => {
          curTypesVal += `${type}`;
          if (count < item.types.length) {
            curTypesDisplay += `${type} - `;
          } else {
            curTypesDisplay += `${type}`;
          }
          count += 1;
        });
        currentDetails['types'] = {
          value: curTypesVal,
          display: curTypesDisplay
        };
        currentDetails['image'] = {
          value: item.image_url,
          display: (
            <Div type="flex" hAlign="center" vAlign="center" className="w-per-100">
              <Image src={item.image_url} />
            </Div>
          )
        };
        localData.push(currentDetails);
      });
      return localData;
    }
    return [];
  }, [pokemones]);

  return (
    <>
      <Scroll
        scrollContainerClassName="w-per-100 height-px-20 ml-auto mr-auto"
        SCROLLABLE_ELEMENT_ID={SCROLLABLE_ELEMENT_ID}
        SCROLLABLE_CONTENT_ID={SCROLLABLE_CONTENT_ID}
        updateRefs={updateRefs}
        setUpdateRefs={setUpdateRefs}
        timeOutToUpdate={350}>
        <Div type="flex">
          <Div
            type="flex"
            hAlign="start"
            className={cx('bgWhite boxShadowType1 of-x-auto hideScrollBar ml-auto mr-auto p1')}
            id={SCROLLABLE_ELEMENT_ID}>
            <Table
              headLines={headLines}
              data={data}
              className={cx('fs-px-14')}
              tableClassName={cx('')}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              rowsPerPage={5}
              numberOfShownPages={5}
              id={SCROLLABLE_CONTENT_ID}
            />
          </Div>
        </Div>
      </Scroll>
    </>
  );
};

export default SavedPokemons;
