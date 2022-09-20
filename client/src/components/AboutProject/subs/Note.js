import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from '../AboutProject.module.scss';

const Note = ({ question, answer, ...props }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <Div className={cx('bgWhite boxShadowType1 p2 mb2', styles.noteContainer)} {...props}>
        <Div
          type="flex"
          distributedBetween
          vAlign="end"
          className={cx('mb2 textRed f-b', styles.qa)}>
          <Div className="">{question}</Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'br-rad-per-50 p1 boxShadowType1 bgPrimary tranistion1 mouse-hand',
              showAnswer && styles.iconContainerActive
            )}
            onClick={() => setShowAnswer(!showAnswer)}>
            <Icon type="angleDown" scale={1.2} color="white" />
          </Div>
        </Div>
        <Div
          className={cx(
            'tranistion1 of-x-hidden of-y-hidden',
            styles.qa,
            styles.answer,
            showAnswer && styles.answerIsActive
          )}>
          {answer}
        </Div>
      </Div>
    </>
  );
};

export default Note;
