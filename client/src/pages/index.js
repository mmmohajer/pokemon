import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import Pokemon from '@/components/Pokemon';
import SavedPokemons from '@/components/SavedPokemons';

import styles from './index.module.scss';

const Index = () => {
  const [showFromDB, setShowFromDB] = useState(false);

  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          {!showFromDB ? (
            <>
              <Pokemon />
              <Div type="flex" hAlign="center" vAlign="center" className="mt3">
                <Button onClick={() => setShowFromDB(true)} className="w-px-200">
                  Pokemons In Database
                </Button>
              </Div>
            </>
          ) : (
            <>
              <SavedPokemons />
              <Div type="flex" hAlign="center" vAlign="center" className="mt3">
                <Button className="w-px-200" onClick={() => setShowFromDB(false)}>
                  All Pokemons
                </Button>
              </Div>
            </>
          )}
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
