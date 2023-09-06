import { memo } from 'react';
import { ButtonLink } from '@wildberries/ui-kit';
import { useRouter } from 'react-router5';

export const GoBackButton = memo(() => {
  const { navigate } = useRouter();
  const goBack = () => navigate('/home');

  return (
    <ButtonLink
      onClick={goBack}
      routeName="/home"
      text="link-without-underline"
      variant="link-without-underline"
    />
  );
});
