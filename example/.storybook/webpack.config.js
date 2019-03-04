const { resolve } = require('path');
const pushArray = (orig, additional) => {
  additional.forEach((add) => {
    orig.push(add);
  });
};
module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.context = __dirname;
  const rule = storybookBaseConfig.module.rules.find(({ use }) => {
    return use.find(({ loader }) => loader === 'babel-loader');
  });
  if (!rule || !rule.include || !rule.exclude) {
    return storybookBaseConfig;
  }
  // pushArray(rule.include, [resolve(__dirname, '../../views')]);
  // pushArray(rule.exclude, [resolve(__dirname, '../../views/node_modules')]);

  storybookBaseConfig.resolve.alias['react-native$'] = 'react-native-web';
  storybookBaseConfig.resolve.alias['@react-navigation/native$'] = resolve(
    __dirname,
    'resolveReactNavigation.js'
  );
  storybookBaseConfig.resolve.alias['react-navigation$'] =
    '@react-navigation/core';

  const localNodeModules = resolve(__dirname, '../node_modules');
  if (Array.isArray(storybookBaseConfig.resolve.modules)) {
    storybookBaseConfig.resolve.modules.push(localNodeModules);
  } else {
    storybookBaseConfig.resolve.modules = [localNodeModules];
  }

  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpe?g|gif)$/,
    loader: 'react-native-web-image-loader?name=[hash].[ext]',
  });

  /* maybe take a look at this to resolve hmr issues: https://github.com/storybooks/storybook/issues/5572 */
  storybookBaseConfig.watchOptions = {
    ignored: [/node_modules([\\]+|\/)+(?!react-navigation-stack-web)/],
  };

  return storybookBaseConfig;
};
