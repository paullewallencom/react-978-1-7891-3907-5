import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Button, Content, View, DeckSwiper, Card, CardItem, Text, Form, Item, Input, Label, Textarea } from 'native-base';
import Layout from './Components/Layout';

const { width } =  Dimensions.get("window");

export default class App extends Component {

  state = {
    title: '',
    amount: '',
    notes: '',
    budget: [{
      title : 'Budget Bulder',
      notes: '',
      amount: 0
    }]
  }

  componentDidMount() {
    if (this.state.budget.length > 1) {
      this.getTotal();
    }
  }

  getTotal () {
    const { budget } = this.state;
    
    const amount = budget.map((item)=> item.amount).reduce((total, num) => total + num);

    budget.push({ title: 'total', amount })

    this.setState({ budget });    
  }

  OnButtonPress() {
    const { title, amount, notes, budget } = this.state;

    budget.pop();
  
    budget.push({ title, amount, notes });
    this.setState({ title:'', amount:'', notes:'', budget }, () => this.getTotal());    
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
                style={ styles.textArea }
                value={this.state.notes}
                onChangeText={(notes) => this.setState({ notes })}
                rowSpan={5} 
              />
            </Item>

          </Form>
        </Content>
        <View style={styles.cardContainer}>
          <DeckSwiper
            ref={(card) => this._deckSwiper = card}
            dataSource={this.state.budget}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <View style={styles.cardStyle}>

                    { 
                      (item.title === 'Budget Bulder') ? <Text> Your Personal Budget Tracker </Text> :
                      (item.title !== 'total') ? 
                        <React.Fragment>
                          <Text>The item {item.title} has an amount of {item.amount} </Text>
                          <Text></Text>
                          <Text>notes: {item.notes}</Text>
                          <Text></Text>                        
                        </React.Fragment> : 
                      <Text> the total amount due is {item.amount}</Text>                        
                    }

                  </View>
                </CardItem>
              </Card>
            }
          />
          <Button
            dark
            onPress={this.OnButtonPress.bind(this)}
            style={styles.placeAtBottom}>
            <Text>Submit Budget Item</Text>
          </Button>
        </View>
      </Layout>
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
  cardStyle : { 
    height: 150, 
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#ADD9FE' 
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
