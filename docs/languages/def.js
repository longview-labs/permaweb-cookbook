// add new strings json file for new languages
const enStrings = require("./strings/en.json");
const zhStrings = require("./strings/zh.json");
const esStrings = require("./strings/es.json");
const ptStrings = require("./strings/pt.json");

// Start adding new languages by making a new language object inside the array
const languages = [
  {
    display: "Español",
    name: "Spanish",
    code: "es",
    strings: esStrings,
  },
  {
    display: "简体中文",
    name: "Mandarin Chinese",
    code: "zh",
    strings: zhStrings,
  },
  {
    display: "Português",
    name: "Portuguese",
    code: "pt",
    strings: ptStrings,
  },
];

const i18n_strs = languages.reduce((langs, currentLang) => {
  langs[currentLang.code] = currentLang.strings;
  return langs;
}, {});

const get_i18n_str = (langCode="en", key, fallbackStr) => {
  const engStr = enStrings[key] || fallbackStr;
  if (langCode === "en") return engStr;
  return i18n_strs[langCode][key] || engStr;
}

module.exports = {
  languages,
  get_i18n_str
};