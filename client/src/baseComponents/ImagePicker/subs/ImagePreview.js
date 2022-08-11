import React from 'react';
import cx from 'classnames';
import { Div, Image } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';

import styles from '../ImagePicker.module.scss';

const ImagePreview = ({ src, setFile, setSrc, setFileName, inputFileField }) => {
  return (
    <>
      {src && (
        <Div className={cx('ml1 pos-rel mouse-hand', styles.imagePreviewContainer)}>
          <Image src={src} />
          <Div>
            <Close
              className=""
              onClick={() => {
                setFile('');
                setSrc('');
                setFileName('');
                inputFileField.current.value = null;
              }}
            />
          </Div>
        </Div>
      )}
    </>
  );
};

export default ImagePreview;