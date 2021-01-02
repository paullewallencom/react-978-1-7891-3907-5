import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'; 
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

const DrawerNavigator = createDrawerNavigator({
  Update: {
    screen: UpdateScreen,
  },
  Delete: {
    screen: DeleteScreen,
  },
});

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: RootStack,
    }, 
    Update: {
      screen: DrawerNavigator
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