import React, {Component} from 'react';
import { Alert, Button, TextInput ,StyleSheet, Text, View} from 'react-native';

export default class App extends Component {

  state = {
    text: ''
  }

  OnButtonPress() {
    const { text } = this.state;
    Alert.alert(`you entered ${text} into the textbox `);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native in 7 days!</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'black',
            borderWidth: 1
          }}
          onChangeText={ (text) => this.setState({ text }) }
          placeholder="enter text here"
          autoCapitalize={"none"}
        />
        <Button
          title="press here"
          onPress={this.OnButtonPress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
