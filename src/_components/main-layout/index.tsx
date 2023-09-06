import { memo, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  className?: string;
  children: ReactNode;
};

const BLOCK_NAME = 'Main';

export const MainLayout = memo(({ className, children }: PropsType) => (
  <div className={cn(`${className} ${BLOCK_NAME}`)}>
    <div className={cn(`${BLOCK_NAME}__wrapper`)}>{children}</div>
  </div>
));
