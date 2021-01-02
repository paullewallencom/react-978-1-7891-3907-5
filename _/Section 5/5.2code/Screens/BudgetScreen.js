import React, { Component } from 'react';
import { View } from 'native-base';
import CardStack from '../Components/CardStack';
import Layout from '../Components/Layout';
import styles from '../Screens/Styles/BudgetScreenStyle';

export default class BudgetScreen extends Component {
  render() {
    return (
      <Layout>
        <View style={styles.cardContainer}>
          <CardStack />
        </View>
      </Layout>
    );
  }
}