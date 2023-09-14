const ENDPOINT_EU_PORTAL_DEV = '';
const ENDPOINT_EU_PORTAL_PROD =
  'http://suppliers.suppliers-portal-eu.svc.k8s.test';

export const getPortalEuEndpoint = (): string =>
  process.env.NODE_ENV !== 'production'
    ? ENDPOINT_EU_PORTAL_DEV
    : ENDPOINT_EU_PORTAL_PROD;

// eslint-disable-next-line import/no-unused-modules
export const translationsEndpoint = `${getPortalEuEndpoint()}/I18N`;
