const releaseItConfig = require('./.release-it.json');
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'], // type 不为空
    'type-enum': [
      2,
      'always',
      releaseItConfig.plugins['@release-it/conventional-changelog'].preset.types.map((item) => item.type),
    ],
  },
};
