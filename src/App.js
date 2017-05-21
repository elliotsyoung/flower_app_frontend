import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Header, Card, CardSection, Input, Button, Spinner } from './components/common';

function buttonPress() {
  console.log('Outside of the class!');
}

buttonPress();

class App extends Component {

  state = {
    pokemon1: 'Please Search for a pokemon!',
    pokemon2: 'This is where another pokemon will show!'
  } //end of state

  componentDidMount() {
    axios.get('http://192.168.1.159:5000/elliot')
    .then(response => {
      console.log(response.data);
      this.setState({ pokemon1: response.data.elliot });
    })
    .catch(error => {
      console.log(error);
      console.log(error.response.data);
    });
  } // end of componentWillMount

  buttonPress() {
    this.setState({ pokemon1: false, pokemon2: false });
    // SET TOP POKEMON
    axios.get('http://192.168.1.159:5000/elliot')
    .then(response => {
      this.setState({ pokemon1: response.data.elliot });
    })
    .catch(error => {
      this.setState({ pokemon1: error.response.data.error });
    });
    // SET BOTTOM POKEMON
    axios.get('http://192.168.1.159:5000/elliot')
    .then(response => {
      this.setState({ pokemon2: response.data.elliot });
    })
    .catch(error => {
      this.setState({ pokemon2: error.response.data.error });
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Flower App" />
        <Card>
          <CardSection>
            <Input
              label="username"
              placeholder="username"
            />
          </CardSection>
          <CardSection>
            {this.state.pokemon1 &&
              <Text>{this.state.pokemon1}</Text>
            }
            {!this.state.pokemon1 &&
              <Spinner size="large" />
            }
          </CardSection>
          <CardSection>
            {this.state.pokemon2 &&
              <Text>{this.state.pokemon2}</Text>
            }
            {!this.state.pokemon2 &&
              <Spinner size="large" />
            }
          </CardSection>
          <CardSection>
            <Button
              onPress={this.buttonPress.bind(this)}
            >
                BUTTON
              </Button>
            </CardSection>
          </Card>
        </View>
      );
    } // end of Render
  } // end of App

  export default App;
