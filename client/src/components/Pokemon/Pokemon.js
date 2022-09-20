import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Image } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import Icon from '@/baseComponents/Icon';
import Scroll from '@/baseComponents/Scroll';
import Table from '@/baseComponents/Table';

import { COLORS } from '@/constants/vars';
import { POKEMON_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import useApiCalls from '@/hooks/useApiCalls';

import { getAllPokemons, prepareData, savePokemonHandler, headLines } from './utils';
import { SCROLLABLE_ELEMENT_ID, SCROLLABLE_CONTENT_ID } from './constants';
import styles from './Pokemon.module.scss';

const Pokemon = () => {
  const dispatch = useDispatch();

  const [pokemones, setPokemones] = useState([]);
  const [preparedData, setPreparedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [updateRefs, setUpdateRefs] = useState(true);
  const [bodyData, setBodyData] = useState(true);

  useEffect(() => {
    getAllPokemons(dispatch, setPokemones);
  }, []);

  useEffect(() => {
    if (pokemones?.length) {
      prepareData(dispatch, pokemones, setPreparedData);
    }
  }, [pokemones]);

  const [sendSavePokemonReq, setSendSavePokemonReq] = useState(false);
  const { data: saveData, error: saveError } = useApiCalls({
    sendReq: sendSavePokemonReq,
    setSendReq: setSendSavePokemonReq,
    method: 'POST',
    url: POKEMON_API_ROUTE,
    bodyData,
    showLoading: true
  });
  useEffect(() => {
    if (saveData) {
      console.log(saveData);
      addAlertItem(dispatch, 'Pokemon has been successfully added.', 'success');
    }
  }, [saveData]);

  const data = useMemo(() => {
    if (preparedData?.length) {
      const localData = [];
      preparedData.forEach((item) => {
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
        currentDetails['button'] = {
          value: item.name,
          display: (
            <Div type="flex" hAlign="start" vAlign="center" className="w-per-100">
              <Icon
                type="save"
                scale={1.75}
                className="w-px-40 height-px-40 flex flex--jc--center flex--ai--center mouse-hand"
                color={COLORS.primary}
                onClick={() => savePokemonHandler(item, setBodyData, setSendSavePokemonReq)}
              />
            </Div>
          )
        };
        localData.push(currentDetails);
      });
      return localData;
    }
    return [];
  }, [preparedData]);

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
      <Div type="flex" hAlign="center" vAlign="center" className="mt3">
        <Button className="w-px-200">Pokemons In Database</Button>
      </Div>
    </>
  );
};

export default Pokemon;
