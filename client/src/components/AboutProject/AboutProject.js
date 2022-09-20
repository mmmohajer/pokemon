import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/Anchor';

import { QAs } from './utils';
import Note from './subs/Note';
import styles from './AboutProject.module.scss';

const AboutProject = () => {
  return (
    <>
      <Div className="flex--gr--1">
        <Div type="flex" hAlign="center" direction="vertical">
          {QAs(Div, Anchor)?.map((item, idx) => (
            <Note question={item.Question} answer={item.Answer} key={idx} />
          ))}
        </Div>
      </Div>
    </>
  );
};

export default AboutProject;
