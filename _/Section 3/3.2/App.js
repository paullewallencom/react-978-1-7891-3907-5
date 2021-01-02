import React, { Component } from 'react';
import { Platform, Dimensions, Alert, ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, TouchableHighlight, Image, View, ScrollView } from 'react-native';

export default class App extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    setTimeout(() => this.fillList(100), 1000);
  }

  fillList = (numberOfRows) => {
    const list = [...Array(numberOfRows)].map((x, i) => ({ key: `a${i}` }));
    this.setState({ list });
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(`you clicked ${item.key}`)}
        style={[styles.input, { backgroundColor: '#afe' }]}>
        <Text>{item.key}</Text>
      </TouchableOpacity>
    );
  }

  renderSeparator = () => <View style={{ height: 10, backgroundColor: "#D4AF37" }} />

  renderHeader = () => {

    const { height, width } = Dimensions.get('screen');
    const isPortrait = (width < height) ? true : false;
    const backgroundColor = (isPortrait) ? '#a9a9a9' : '#555eee';
    const headerText = (Platform.OS === 'ios') ? 'iOS' : 'android';
    return (
      <View style={{ height: height / 5, backgroundColor, alignItems: 'center' }} >
        <Text style={[styles.welcome, { color: '#fff' }]} >Welcome to the {headerText} Header</Text>
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View style={{ height: 100, backgroundColor: "#000000", alignItems: 'center' }}>
        <Text style={[styles.welcome, { color: '#fff' }]} >Welcome to the Footer</Text>
      </View>
    );
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.halfContainer}>
        <ScrollView
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          centerContent //centers content when zoom is less than scroll view bounds 
          maximumZoomScale={2}
          minimumZoomScale={1}
        >
          <TouchableHighlight>
           <Image
             style={{width: 300, height: 300}}
             source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
           />          
          </TouchableHighlight>
        </ScrollView>
        </View>
        <View style={styles.halfContainer}> 
        {
          (this.state.list.length) ?
            <FlatList
              data={this.state.list}
              renderItem={({ item }) => this.renderItem(item)}
              onEndReached={() => this.fillList(this.state.list.length + 50)}
              onEndReachedThreshold={0.1}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
            /> : <ActivityIndicator />
        }
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',    
  },
  halfContainer : {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
});
