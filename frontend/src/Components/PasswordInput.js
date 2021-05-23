import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Icon, Input, Text } from '@ui-kitten/components';

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);

const PasswordInput = ({label, password, setPassword}) => {

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  // there is something called caption
  return (
    <>
    <View style={styles.labelStyle}>
      <Text style={styles.labelTextStyle} >{label}</Text>
    </View>
    <Input
      value={password}
      placeholder={`Enter ${label}`}
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setPassword(nextValue)}
      style={styles.textInputStyle}
    />
    </>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  }, 
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

export default PasswordInput;