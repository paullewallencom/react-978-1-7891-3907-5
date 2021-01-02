import React, { Component } from 'react';
import { Text } from 'native-base';
import Layout from '../Components/Layout';
// import styles from '../Screens/Styles/BudgetScreenStyle';

export default class UpdateScreen extends Component {
  static navigationOptions = { 
    drawerLabel: 'Update'
  };
    
  render() {
    return (
      <Layout>
        <Text>Update Screen</Text>
      </Layout>
    );
  }
}