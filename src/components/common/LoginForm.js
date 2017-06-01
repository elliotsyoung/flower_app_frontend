import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './../../actions/AuthActions';
import { Card, Header, CardSection, Input, Button, Spinner, FruitLoader } from './';

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

  checkLogin() {
    //we will end up removing this function actually but whatever
    console.log("not implemented");
  }

  renderButton() {
    if (this.props.loading) {
      return <FruitLoader size="medium" />;
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
              onPress={this.onButtonPress.bind(this)}
            >
                BUTTON
              </Button>
            </CardSection>
            <CardSection>
              <Text>{this.props.errors}</Text>
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
