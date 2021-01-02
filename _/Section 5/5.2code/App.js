import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { Root } from 'native-base';
import HomeScreen  from './Screens/HomeSceen';
import BudgetScreen  from './Screens/BudgetScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Budget: {
      screen: BudgetScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}