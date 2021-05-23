import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginNavigator from './Navigations/LoginNavigator';

const AppStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="LoginStack" 
                screenOptions={{
                    headerShown: false
                }}
            >
                <AppStack.Screen name="LoginStack" component={LoginNavigator}/>
            </AppStack.Navigator>
        </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({});

export default App;