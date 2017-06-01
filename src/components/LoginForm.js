import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, Header, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password }); // Action
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
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
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="password"
              placeholder="password"
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
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
      }
    }

    const mapStateToProps = ({ auth }) => {
      const { email, password, error, loading } = auth;

      return { email, password, error, loading };
    };

    export default connect(mapStateToProps, {
      emailChanged, passwordChanged, loginUser
    })(LoginForm);
