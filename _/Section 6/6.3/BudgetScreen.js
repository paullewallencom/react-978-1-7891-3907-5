import React, { Component } from 'react';
import { View, Button, Text } from 'native-base';
import CardStack from '../Components/CardStack';
import Layout from '../Components/Layout';
import styles from '../Screens/Styles/BudgetScreenStyle';
import readData from '../Services/read';
import showToast from '../Services/toast';

export default class BudgetScreen extends Component {

  state = {
    budget: [{
      item: 'Budget Bulder',
      notes: '',
      amount: 0
    }]
  }

  async componentDidMount() {
    try {
      const budget = await readData();
      this.setState({ budget });  
      if (this.state.budget[0].amount > 0) {
        this.getTotal();
      }      
    } catch (error) {
      showToast({ type: 'danger', message: error.message});
    }
  }  

  getTotal() {
    const { budget } = this.state;

    const amount = budget.map((item) => item.amount).reduce((total, num) => total + num);

    budget.push({ item: 'total', amount })

    this.setState({ budget });
  }


  render() {
    return (
      <Layout nav={this.props.navigation}>
        <View style={styles.cardContainer}>
          <CardStack budget={this.state.budget} />
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