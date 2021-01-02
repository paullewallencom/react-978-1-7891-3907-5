import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Button, Content, Text, Form, Item, Input, Label, Textarea, Toast, View } from 'native-base';
import Layout from '../Components/Layout';
import styles from '../Screens/Styles/HomeScreenStyle';

export default class HomeScreen extends Component {
  state = {
    title: '',
    amount: '',
    notes: '',
    budget: [{
      title: 'Budget Bulder',
      notes: '',
      amount: 0
    }]
  }

  componentDidMount() {

    this.getData();

    if (this.state.budget[0].amount > 0) {
      this.getTotal();
    }
  }

  async getData() {
    try {
      const budget = JSON.parse(await AsyncStorage.getItem('budget'));
      if (budget) {
        this.setState({ budget });
      }
    } catch (error) {
      this.showToast({ type: 'danger', text: error.message })
    }
  }

  async setData(budget) {
    try {
      await AsyncStorage.setItem('budget', JSON.stringify(budget));
    } catch (error) {
      this.showToast({ type: 'danger', text: error.message })
    }
  }

  getTotal() {
    const { budget } = this.state;

    const amount = budget.map((item) => item.amount).reduce((total, num) => total + num);

    budget.push({ title: 'total', amount })

    this.setState({ budget });
  }

  OnButtonPress() {
    const { title, amount, notes, budget } = this.state;
    const valid = this.validateForm(title, amount);
    if (valid.type === 'success') {
      budget.pop();
      budget.push({ title, amount, notes });

      this.setState({ title: '', amount: '', notes: '', budget }, () => {
        this.getTotal();
        this.setData(this.state.budget)
      });
    }
    this.showToast(valid)
  }

  validateForm(title, amount) {
    if (title) {
      if (amount) {
        return { type: 'success', text: 'budget updated' };
      } else {
        return { type: 'danger', text: 'amount is required' };
      }
    } else {
      return { type: 'danger', text: 'title is required' };
    }
  }

  showToast(valid) {
    Toast.show({
      text: valid.text,
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: valid.type
    });
  }

  render() {
    return (

      <Layout>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>title</Label>
              <Input
                onChangeText={(title) => this.setState({ title })}
                value={this.state.title}
              />
            </Item>
            <Item floatingLabel>
              <Label>amount</Label>
              <Input
                onChangeText={(amount) => this.setState({ amount: +amount })}
                value={this.state.amount.toString()}
              />
            </Item>
            <Item stackedLabel>
              <Label>notes</Label>
              <Textarea
                style={styles.textArea}
                value={this.state.notes}
                onChangeText={(notes) => this.setState({ notes })}
                rowSpan={5}
              />
            </Item>
          </Form>
          <View style={styles.rowDisplay}>
          <Button
            dark
            onPress={this.OnButtonPress.bind(this)}>
            <Text>Submit Budget Item</Text>
          </Button>
          <Button
            success
            onPress={() => this.props.navigation.navigate('Budget', { budget: this.state.budget })}>
            <Text>View Budget Item</Text>
          </Button>
          </View>
        </Content>
      </Layout>


    );
  }
}
