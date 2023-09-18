import { setLanguageToCookie } from '@portals/v3-utils';

export const setLocaleCooke = (): void => {
  if (/^en\b/.test(navigator.language)) {
    setLanguageToCookie('en');
  }
};
