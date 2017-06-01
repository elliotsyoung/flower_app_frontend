import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import { Header, Card, CardSection, Input, Button } from './components/common';
import reducers from './reducers';

import ax from './config/axiosSetup';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
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
          </Provider>
      );
    } // end of Render
  } // end of App

  export default App;
