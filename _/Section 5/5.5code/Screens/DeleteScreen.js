import React, { Component } from 'react';
import { Text } from 'native-base';
import Layout from '../Components/Layout';
// import styles from '../Screens/Styles/BudgetScreenStyle';

export default class DeleteScreen extends Component {
  static navigationOptions = { 
    drawerLabel: 'Delete'
  };
    
  render() {
    return (
      <Layout>
        <Text>Delete Screen</Text>
      </Layout>
    );
  }
}