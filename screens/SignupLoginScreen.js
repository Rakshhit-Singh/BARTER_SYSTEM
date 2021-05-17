import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailID: '',
      password: '',
    };
  }

  userLogin = async (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then((response) => {
        alert('User Login Successful.');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  userSignUp = async (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        alert('User successfully signedUp');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:200, height:200, marginBottom:30}} source={require('../assets/barter.gif')}/>

        <View>
          <Text style={styles.title}>BARTER</Text>
        </View>

        <View>
          <TextInput
            style={styles.loginBox}
            placeholderTextColor='red'
            placeholder="EMAIL ID"
            keyboardType="email-address"
            value={this.state.emailID}
            onChangeText={(text) => {
              this.setState({
                emailID: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            placeholderTextColor='red'
            placeholder="PASSWORD"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 10 }]}
            onPress={() => {
              this.userLogin(this.state.emailID, this.state.password);
            }}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailID, this.state.password);
            }}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D3A5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    paddingBottom: 30,
    color: '#d19f56',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
