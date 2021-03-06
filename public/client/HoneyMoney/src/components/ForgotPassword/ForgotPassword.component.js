import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
} from 'react-native';
import image from '../../img/login.jpg';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.fields}>
          <TextInput
            style={styles.field}
            placeholder={'email'}
            placeholderTextColor={'#fff'}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    width: 239,
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    backgroundColor: '#FF4F4F',
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 37,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  fields: {
    height: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    height: 40,
    width: 274,
    borderRadius: 10,
    backgroundColor: '#565656',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    paddingLeft: 11,
    marginVertical: 10,
    color: '#fff',
  },
});

export default ForgotPassword;
