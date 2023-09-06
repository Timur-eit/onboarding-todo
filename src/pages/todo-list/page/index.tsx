import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { MainCard } from './_components/main-card';
import { Header } from './_components/header';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'List-home-page';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="list-home-page">
    <Header />
    <div className={cn(`${BLOCK_NAME}__list-wrapper`)}>
      <MainCard />
    </div>
  </div>
));
