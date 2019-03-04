# React Navigation Stack

[![CircleCI badge](https://circleci.com/gh/react-navigation/react-navigation-stack-web/tree/master.svg?style=shield)](https://circleci.com/gh/react-navigation/react-navigation-stack-web/tree/master)

Stack navigator for use on the web.

## Installation

Open a Terminal in your project's folder and run,

```sh
yarn add react-navigation-stack-web
```

This package assumes you alias react-native to react-native-web in you bundler.

## Usage

```js
import { createStackNavigator } from 'react-navigation-stack-web';

export default createStackNavigator({
  Inbox: InboxScreen
  Drafts: DraftsScreen,
}, {
  initialRouteName: 'Inbox',
});
```

## Development workflow

- Clone this repository
- Run `yarn` in the root directory and in the `example` directory
- Run `yarn dev` in the root directory
- Run `yarn storybook` in the `example` directory

## Docs

Documentation can be found on the [React Navigation website](https://reactnavigation.org/docs/en/stack-navigator.html).
