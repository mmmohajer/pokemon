import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import Logout from '@/baseComponents/Logout';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import Pokemon from '@/components/Pokemon';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Pokemon />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
