import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('textWhite bgThemeTwo fs-px-14 p1')}>
        © 2022 Top Family | All Rights Reserved | Powered by
        <a href="https://www.iswad.tech" className={cx('flex flex--jc--center ml1 textWhite')}>
          ISWAD
        </a>
      </Div>
    </>
  );
};

export default Footer;
