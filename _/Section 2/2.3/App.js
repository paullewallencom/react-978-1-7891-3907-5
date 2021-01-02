import React, { Component } from 'react';
import { Alert, ActivityIndicator, FlatList ,StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    setTimeout(() => this.fillList(100), 1000);
  }

  fillList = (numberOfRows) => {
    const list = [...Array(numberOfRows)].map((x,i) => ({ key: `a${i}`} ));
    this.setState({ list });      
  }

  renderItem = (item) => <Text style={styles.input}>{item.key}</Text>

  renderSeparator = () => <View style={{ height: 10, backgroundColor: "#D4AF37" }} />
    
  renderHeader = () => {
    return (
      <View style={{ height: 100, backgroundColor: "#a9a9a9", alignItems:'center' }} >
       <Text style={[styles.welcome,{ color: '#fff' }]} >Welcome to the Header</Text>
      </View>
    );
  };
  renderFooter = () => {
    return (
      <View style={{ height: 100, backgroundColor: "#000000", alignItems:'center' }}>
        <Text style={[styles.welcome,{ color: '#fff' }]} >Welcome to the Footer</Text>
      </View>
    );
  };

 
  render() {
    return (
      <View style={styles.container}>
        {
          (this.state.list.length) ?
          <FlatList
            style={{ marginTop:50, marginBottom: 50 }}
            data={this.state.list}
            renderItem={({item}) => this.renderItem(item)}
            onEndReached={() => this.fillList(this.state.list.length+50)}
            onEndReachedThreshold={0.1} 
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}                       
          />: <ActivityIndicator /> 
        }
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
  input: {
    // margin: 15,
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
