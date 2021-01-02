import React, { Component } from 'react';
import { Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Layout from './Components/Layout';
export default class App extends Component {

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}
