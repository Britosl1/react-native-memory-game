import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import ResetIcon from '../../../images/reset-arrow.png';

interface IResetGameButtonProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: '#7c5295',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
});

const ResetGameButton: React.FC<IResetGameButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={ResetIcon} />
    </TouchableOpacity>
  );
};

export default ResetGameButton;
