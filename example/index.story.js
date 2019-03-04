import { createBrowserApp } from '@react-navigation/web';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack-web/dist';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Go to Details"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createBrowserApp(AppNavigator);

storiesOf('App', module).add('App', () => <App />);
