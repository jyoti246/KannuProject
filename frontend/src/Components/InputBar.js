import React from 'react';82
import { Input } from '@ui-kitten/components';
import { StyleSheet, View, Text } from 'react-native';

const InputBar = ({label, text, onChangeText}) => {
    return (

        <View>
            <View style={styles.labelStyle}>
                <Text style={styles.labelTextStyle} >{label}</Text>
            </View>
            
            <Input
            value={text}
            onChangeText={onChangeText}
            style={styles.textInputStyle}
            placeholder={`Enter ${label}`}
            />

        </View>
        
        
    )
}

const styles = StyleSheet.create({
    textInputStyle : {
        borderColor: 'black', 
        borderWidth:1,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 25, 
        marginTop: 5,
    }, 
    labelStyle: {
        marginLeft: 30,
    }, 
    labelTextStyle: {
        fontSize: 20,
        fontWeight: '900',
    }
});

export default InputBar;