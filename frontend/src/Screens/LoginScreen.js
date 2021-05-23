import React, {useState} from 'react';
import { StyleSheet} from 'react-native'
import { Button, Text } from '@ui-kitten/components';
import {Header} from 'react-native-elements';

import InputBar from '../Components/InputBar';
import PasswordInput from '../Components/PasswordInput';
const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameInput = (text) => {
    setUsername(text);
  }
  return (
    <>
    <Header 
      backgroundColor = "#000000"
      centerComponent={{ text: 'Rooster', style: { fontSize: 20, color: '#fff', fontWeight:'bold'} }}
    />

    <Text category='h1' style={{textAlign: 'left', alignSelf: 'stretch',  marginVertical:25, marginLeft: 20}}> 
        Login
    </Text>

    <InputBar label="username" text={username} onChangeText={onUsernameInput} />

    <PasswordInput label="password" password={password} setPassword={setPassword} />
      
    <Button style={styles.buttonStyle}>
      Continue
    </Button>

    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50,
    },
    text: {
      marginHorizontal: 8,
    },
    buttonStyle: {
      backgroundColor:'black',
      color:'white',
      height: 50,
      borderRadius: 10,
      marginHorizontal: 25, 
      marginTop: 5,
    }
  });

  export default LoginScreen;