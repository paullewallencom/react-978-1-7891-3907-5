import React, { Component } from 'react';
import { Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

import Layout from './Components/Layout';
export default class App extends Component {

  render() {
    return (
      <Layout>
        <Grid>
          <Col style={{ backgroundColor: '#ADD9FE' }}>
            <Image
              style={{flex:1, height: undefined, width: undefined}}
              resizeMode="contain"
              source={require('./images/fancyImg.jpg')}
            />
          </Col>
          <Col style={{ backgroundColor: '#ADD9FE' }}>
            <Image
              style={{flex:1, height: undefined, width: undefined}}
              resizeMode="contain"
              source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
            />
          </Col>
        </Grid>
      </Layout>
    );
  }
}
