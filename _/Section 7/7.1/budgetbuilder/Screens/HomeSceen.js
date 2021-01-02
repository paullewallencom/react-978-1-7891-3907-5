import React, { Component } from 'react';
import { Button, Content, Text, Form, Item, Input, Label, Textarea, View } from 'native-base';
import Layout from '../Components/Layout';
import styles from '../Screens/Styles/HomeScreenStyle';
import createData from '../Services/create';
import showToast from '../Services/toast';

export default class HomeScreen extends Component {

  state = {
    item: '',
    amount: '',
    notes: ''
  }

  async OnButtonPress() {
    const { item, amount, notes } = this.state;
    const valid = this.validateForm(item, amount);
    if (valid.type === 'success') {
      const success = await createData({ item, amount, notes });
      if (success) {
        this.setState({ item: '', amount: '', notes: '' }); 
      }
    } else {
      showToast(valid)
    }
  }

  validateForm(item, amount) {
    if (item) {
      if (amount) {
        return { type: 'success', text: 'budget updated' };
      } else {
        return { type: 'danger', text: 'amount is required' };
      }
    } else {
      return { type: 'danger', text: 'item is required' };
    }
  }

  render() {
    return (

      <Layout>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>item</Label>
              <Input
                onChangeText={(item) => this.setState({ item })}
                value={this.state.item}
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
