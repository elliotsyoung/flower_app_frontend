import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Header, Card, CardSection, Input, Button } from './components/common';

const ax = axios.create({
  baseURL: 'http://192.168.1.159:5000/',
  withCredentials: true
});

class App extends Component {

  state = {
    email: '',
    password: '',
    errors: ''
  } //end of state

  componentDidMount() {
    console.log('loaded');
  } // end of componentWillMount

  buttonPress() {
    ax.post('login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.response);
    });
  }

  checkLogin() {
    ax.get('session')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Hanagachi" />
        <Card>
          <CardSection>
            <Input
              label="email"
              placeholder="email"
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
              label="password"
              placeholder="password"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <CardSection>
            <Button
              onPress={this.buttonPress.bind(this)}
            >
                BUTTON
              </Button>
            </CardSection>
            <CardSection>
              <Text>{this.state.errors}</Text>
            </CardSection>
            <CardSection>
              <Button
                onPress={this.checkLogin.bind(this)}
              >
                Check Login
              </Button>
            </CardSection>
          </Card>
        </View>
      );
    } // end of Render
  } // end of App

  export default App;
