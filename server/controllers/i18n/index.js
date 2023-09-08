/* eslint-disable no-console */
// const translate = require('./data.json');
const languageEN = require('./en.json');
const languageRU = require('./ru.json');

const localization = {
  ru: languageRU,
  en: languageEN,
};

const i18nController = async (req, res) => {
  console.info('i18nController catch request', req.body);
  const { locale } = req.params;
  res.status(200).json({ translate: localization[locale] });
};

module.exports = {
  i18nController,
};
