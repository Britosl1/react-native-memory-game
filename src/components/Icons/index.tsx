import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Arrow from '../../images/back-arrow.png';

interface IArrowIconProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
  },
});
const ArrowIcon: React.FC<IArrowIconProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={Arrow} />
    </TouchableOpacity>
  );
};

export default ArrowIcon;
