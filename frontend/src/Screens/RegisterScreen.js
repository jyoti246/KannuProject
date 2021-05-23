import React, { useState} from 'react';
import { StyleSheet, View } from 'react-native'
import { Icon, Button, Text } from '@ui-kitten/components';
import { Header} from 'react-native-elements';

import InputBar from '../Components/InputBar';

import { TouchableOpacity } from 'react-native';

const RightIcon = (props) => (
    <Icon {...props} name='chevron-right-outline'/>
  );
  

const RegisterScreen = ({navigation}) => {

  const [username, setUsername] = useState('');

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
        Register
    </Text>

    <View style={{flex:0.75}}>



    <InputBar style={{flex:0.1}} label="username" text={username} onChangeText={onUsernameInput} />

    <TouchableOpacity style={{marginTop: 35, marginRight:25, marginLeft:'45%'}} onPress={()=>navigation.navigate('Login')}>
      <Text category='s1' style={{textAlign: 'right', alignSelf: 'stretch'}}>{`Already have an account?`}
      </Text>
      <Text category='h6' style={{textAlign: 'right', alignSelf: 'stretch', textDecorationLine:'underline'}}>{`Login`}
      </Text>
    </TouchableOpacity>

    </View>

    <Button style={[styles.buttonStyle]} onPress={()=>console.log('Hi')} accessoryRight={RightIcon} size='large'>
      Continue
    </Button>

    </>
  );
}

const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor:'black',
      color:'white',
      borderRadius: 10,
      marginHorizontal: 25, 
      alignSelf:'flex-end',
      marginBottom: 20,
    }
  });

  export default RegisterScreen;