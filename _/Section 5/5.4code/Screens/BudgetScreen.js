import React, { Component } from 'react';
import { View, Button, Text } from 'native-base';
import CardStack from '../Components/CardStack';
import Layout from '../Components/Layout';
import styles from '../Screens/Styles/BudgetScreenStyle';

export default class BudgetScreen extends Component {
  render() {
    return (
      <Layout nav={this.props.navigation}>
        <View style={styles.cardContainer}>
          <CardStack budget={this.props.navigation.getParam('budget')} />
        </View>
        <Button
          info
          full
          onPress={() => this.props.navigation.goBack()}>
          <Text>Go Home</Text>
        </Button>
      </Layout>
    );
  }
}