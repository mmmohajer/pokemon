import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Select as BaseSelect, Label } from 'basedesign-iswad';

import styles from './Select.module.scss';

const Select = ({
  val,
  setVal,
  selectIntialShownText,
  options,
  openOptionsDownWard,
  placeHolder,
  isRequired,
  labelText,
  errorMessage,
  errorHandler,
  className
}) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);

  return (
    <>
      <Div className={cx('mainInputContainer pos-rel', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx('inputFieldContainer')} onClick={() => errorHandler('')}>
          <BaseSelect
            selectValue={val}
            setSelectValue={setVal}
            options={options}
            className={cx(styles.select)}
            defaultViewClassName={cx('w-per-100 pt1 pb1 pl2 pr2', styles.defaultSelect)}
            optionClassName={cx(styles.option)}
            optinsContainerClassName={cx(styles.optionsContainer)}
            searchContainerClassName="w-per-100"
            inputSearchClassName={cx(styles.searchInput)}
            placeHolderClassName={cx('fs-px-12', styles.placeHolder)}
            fullWidth
            arrowIconFillColor="gray"
            arrowIconStrokeColor="gray"
            arrowIconScale={0.8}
            searchIconFillColor="gray"
            searchIconStrokeColor="gray"
            openOptionsDownWard={openOptionsDownWard}
            isOptionsActive={isOptionsActive}
            setIsOptionsActive={setIsOptionsActive}
            selectIntialShownText={selectIntialShownText}
            placeholder={placeHolder || 'Choose an option...'}
          />
        </Div>
        <Div className={cx('inputErrorMessage', errorMessage && 'inputErrorMessageIsActive')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default Select;
