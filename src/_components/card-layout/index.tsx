import React, { ReactNode, memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Card';

type PropsType = {
  children: ReactNode;
};

export const Card = memo(({ children }: PropsType) => (
  <div className={cn(`${BLOCK_NAME}`)}>
    <div className={cn(`${BLOCK_NAME}__content-wrapper`)}>{children}</div>
  </div>
));
