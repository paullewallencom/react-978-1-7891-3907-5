import React, { Component } from 'react';
import { Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

export default class Layout extends Component {

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
          {this.props.children}
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

