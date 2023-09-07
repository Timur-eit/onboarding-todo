import React, { memo } from 'react';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import { CreateItem } from './_components/create-item';

export const Page = memo(() => (
  <MainLayout>
    <Card>
      <CreateItem />
    </Card>
  </MainLayout>
));
