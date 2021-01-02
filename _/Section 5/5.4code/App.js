import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'; 
import { Root } from 'native-base';
import HomeScreen  from './Screens/HomeSceen';
import BudgetScreen  from './Screens/BudgetScreen';
import DeleteScreen  from './Screens/DeleteScreen';
import UpdateScreen  from './Screens/UpdateScreen';

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

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: RootStack,
    }, 
    Update: {
      screen: UpdateScreen
    },
    Delete: {
      screen: DeleteScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(TabStack);

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}