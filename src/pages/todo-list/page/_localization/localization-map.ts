import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { Ti18NextTodoModel } from './i-18-next-model';

const getLocalizationMap = (
  nameSpace = APP_NAMESPACE,
  subNamespace = 'todo',
): Ti18NextTodoModel => {
  const getTitles = (groupeName: string): Ti18NextTodoModel['titles'] => ({
    list: `${nameSpace}:${subNamespace}.${groupeName}.list`,
    create: `${nameSpace}:${subNamespace}.${groupeName}.create`,
    edit: `${nameSpace}:${subNamespace}.${groupeName}.edit`,
    delete: `${nameSpace}:${subNamespace}.${groupeName}.delete`,
  });
  const getFieldLabels = (
    groupeName: string,
  ): Ti18NextTodoModel['fieldLabels'] => ({
    createDate: `${nameSpace}:${subNamespace}.${groupeName}.createDate`,
    description: `${nameSpace}:${subNamespace}.${groupeName}.description`,
  });
  const getButtonLabels = (
    groupeName: string,
  ): Ti18NextTodoModel['buttonLabels'] => ({
    create: `${nameSpace}:${subNamespace}.${groupeName}.create`,
    edit: `${nameSpace}:${subNamespace}.${groupeName}.edit`,
    save: `${nameSpace}:${subNamespace}.${groupeName}.save`,
    cancel: `${nameSpace}:${subNamespace}.${groupeName}.cancel`,
    submit: `${nameSpace}:${subNamespace}.${groupeName}.submit`,
  });

  return {
    titles: getTitles('titles'),
    fieldLabels: getFieldLabels('fieldLabels'),
    buttonLabels: getButtonLabels('buttonLabels'),
  };
};

export const todoLocalizationMap = getLocalizationMap();
