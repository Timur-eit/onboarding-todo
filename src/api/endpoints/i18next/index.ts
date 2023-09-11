const BASIC_URL = 'http://localhost:8081';
const PREFIX_URL = `${BASIC_URL}/api/v1`;

export const getI18nextRequestEndpoint = ({
  locale,
  namespace,
}: {
  locale: string;
  namespace: string;
}): string => `${PREFIX_URL}/I18N/${namespace}/${locale}`;
