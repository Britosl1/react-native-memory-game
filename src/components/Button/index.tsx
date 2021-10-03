import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface IButtonProps {
  onPress: () => void;
  text: string;
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: '#663a82',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  textStyle: {
    color: 'white',
    fontWeight: '800',
  },
});

const Button: React.FC<IButtonProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
