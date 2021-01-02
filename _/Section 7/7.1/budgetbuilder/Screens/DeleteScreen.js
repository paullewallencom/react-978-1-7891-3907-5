import React, { Component } from 'react';
import Layout from '../Components/Layout';
import { List, ListItem, Text, Button, Left, Body, Right } from 'native-base';
import readData from '../Services/read';
import deleteData from '../Services/delete';
export default class DeleteScreen extends Component {
 
  static navigationOptions = {
    drawerLabel: 'Delete Through Drawer'
  }

  state = {
    budget: [{
      item: 'Budget Bulder',
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

  async removeItem(id) {
    try {
      await deleteData(id);
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
              danger
              style={{width: 75}}
              onPress={this.removeItem.bind(this, data.id)}>
              <Text>Delete</Text>
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