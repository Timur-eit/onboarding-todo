import { memo, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  children: ReactNode;
};

const BLOCK_NAME = 'Main';

export const MainLayout = memo(({ children }: PropsType) => (
  <div className={cn(`${BLOCK_NAME}`)}>{children}</div>
));
