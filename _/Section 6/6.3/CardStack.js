import React, { Component } from 'react';
import { View, DeckSwiper, Card, CardItem, Text } from 'native-base';
import styles from './Styles/CardStackStyle';

export default class CardStack extends Component {

  renderCard(item) {
    return (
      <Card style={{ elevation: 3 }}>
        <CardItem cardBody>
          <View style={styles.cardStyle}> 
            {
              (item.item === 'Budget Bulder') ? <Text> Your Personal Budget Tracker </Text> :
                (item.item !== 'total') ?
                  <React.Fragment>
                    <Text>The item {item.item} has an amount of {item.amount} </Text>
                    <Text></Text>
                    <Text>notes: {item.notes}</Text>
                    <Text></Text>
                  </React.Fragment> :
                  <Text> the total amount due is {item.amount}</Text>
            } 
          </View>
        </CardItem>
      </Card>
    )
  }

  render() {
    return (
      <DeckSwiper
        ref={(c) => this._deckSwiper = c}
        dataSource={this.props.budget}
        renderItem={item => this.renderCard(item)}
      />
    );
  }
}
