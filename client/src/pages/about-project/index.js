import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import AboutProject from '@/components/AboutProject';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo title="About Project | Pokemon App">
        <PageContainer pageIdentifier="about-project">
          <AboutProject />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
