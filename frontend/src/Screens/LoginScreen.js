import React, {useState} from 'react';
import { StyleSheet} from 'react-native'
import { Button, Text } from '@ui-kitten/components';
import {Header} from 'react-native-elements';

import InputBar from '../Components/InputBar';
import PasswordInput from '../Components/PasswordInput';
import { TouchableOpacity } from 'react-native';
const LoginScreen = ({navigation}) => {

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

    <Text category='h1' style={{textAlign: 'left', alignSelf: 'stretch',  marginTop:40, marginLeft: 20, flex:0.3}}> 
        Login
    </Text>

    <InputBar style={{flex:0.1}}label="username" text={username} onChangeText={onUsernameInput} />

    <PasswordInput style={{flex:0.1}} label="password" password={password} setPassword={setPassword} />
      
    <Button style={[styles.buttonStyle,]} onPress={()=>console.log('Hi')}>
      Continue
    </Button>

    <TouchableOpacity style={{marginTop: 35, marginRight:25, marginLeft:'60%'}} onPress={()=>navigation.navigate('Register')}>
      <Text category='s1' style={{textAlign: 'right', alignSelf: 'stretch'}}>{`New user?`}
      </Text>
      <Text category='h6' style={{textAlign: 'right', alignSelf: 'stretch', textDecorationLine:'underline'}}>{`Register`}
      </Text>
    </TouchableOpacity>

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
      borderRadius: 10,
      marginHorizontal: 25, 
      marginTop: 20,
    }
  });

  export default LoginScreen;