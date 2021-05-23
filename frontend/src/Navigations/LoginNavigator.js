import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const LoginStack = createStackNavigator();

const LoginNavigator = () => {
    return (

        <LoginStack.Navigator 
            initialRouteName="Login" 
            screenOptions={{
                headerShown: false
            }}
        >
            <LoginStack.Screen 
                name="Login"
                component={LoginScreen}
            />   

            <LoginStack.Screen 
                name="Register"
                component={RegisterScreen}
            /> 
        </LoginStack.Navigator>
    )
}

const styles = StyleSheet.create({});

export default LoginNavigator;