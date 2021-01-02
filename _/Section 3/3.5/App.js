import React, { Component } from 'react';
import { Alert, ActivityIndicator, TouchableOpacity, Dimensions, FlatList, Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import platform from './native-base-theme/variables/platform';
import commonColor from './native-base-theme/variables/commonColor';

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
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='add' />
              </Button>
            </Right>
          </Header>
          <Grid>
            <Col style={{ backgroundColor: '#ADD9FE' }} size={2}>
              <Text>1st col</Text>
            </Col>
            <Col size={1}>
              <Row style={{ backgroundColor: '#DDF9D9' }}>
                <Text>2nd col 1st row</Text>
              </Row>
              <Row style={{ backgroundColor: '#FFE5BC' }}>
                <Text>2nd col 2nd row</Text>
              </Row>
            </Col>
          </Grid>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
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

