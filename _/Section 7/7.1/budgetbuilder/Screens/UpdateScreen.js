import React, { Component } from 'react';
import { List, ListItem, Text, Button, Left, Body, Right } from 'native-base';
import Layout from '../Components/Layout';
import readData from '../Services/read';
import updateData from '../Services/update';


export default class UpdateScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Update Through Drawer'
  }

  state = {
    budget: [{
      item: 'Budget Builder',
      notes: '',
      amount: 0
    }]
  }

  async componentDidMount() {
    await this.setBudget();
  }

  async setBudget() {
    try {
      const budget = await readData();
      this.setState({ budget });
    } catch (error) {
      showToast({ type: 'danger', message: error.message });
    }    
  }

  async updateBy1(budgetItem) {
    try {
      const { amount, id } = budgetItem;
      await updateData(id, { amount: amount+1 });
      await this.setBudget();
    } catch (error) {
      showToast({ type: 'danger', message: error.message });
    }
  }

  renderListItem() {

    return this.state.budget.map((data, index) => {
      return (
        <ListItem key={index}>
          <Left>
            <Text>{`${data.item} @ ${data.amount}`}</Text>
          </Left>
          <Body>
          </Body>
          <Right>
            <Button 
              style={{width: 50}}
              onPress={this.updateBy1.bind(this, data)}>
              <Text>+1</Text>
            </Button>
          </Right>
        </ListItem>
      );

    })

  }

  render() {
    return (
      <Layout>
        <List>
          {this.renderListItem()}
        </List>
      </Layout>
    );
  }
}