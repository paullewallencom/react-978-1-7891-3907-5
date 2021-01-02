import React, { Component } from 'react';
import { Dimensions, StyleSheet, AsyncStorage } from 'react-native'
import { Button, Content, View, Text, Form, Item, Input, Label, Textarea, Toast, Root } from 'native-base';
import Layout from './Components/Layout';
import CardStack from './Components/CardStack';

const { width } = Dimensions.get("window");

export default class App extends Component {

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
      console.info( JSON.parse(await AsyncStorage.getItem('budget')))
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
    if(title) {
      if(amount) {
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
      <Root>
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
        </Content>
        <View style={styles.cardContainer}>
          <CardStack budget={this.state.budget} />
          <Button
            dark
            onPress={this.OnButtonPress.bind(this)}
            style={styles.placeAtBottom}>
            <Text>Submit Budget Item</Text>
          </Button>
        </View>
      </Layout>
      </Root>

    );
  }
}

const styles = StyleSheet.create({
  placeAtBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    height: 250,
    backgroundColor: '#DDF9D9'
  },
  textArea: {
    flex: 1,
    width
  }
});
