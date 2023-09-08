import { memo } from 'react';
import { AppError } from '../app-error';
import { AppLoader } from '../app-loader';

type TProps = {
  loading: boolean;
  error: boolean;
};

export const AltContent = memo(({ loading, error }: TProps) => (
  <>
    {loading && !error && <AppLoader />}
    {error && !loading && <AppError />}
  </>
));
