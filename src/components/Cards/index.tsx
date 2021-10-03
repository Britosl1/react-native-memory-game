import React from 'react';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import {StyleSheet, View, Image} from 'react-native';
import {DataType} from '../../data';

interface ICardsProps {
  img: ImageSourcePropType;
  flipped?: boolean | undefined;
  onPress?: () => void;
  card: DataType;
  callback: (card: DataType) => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: 60,
    height: 60,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontStyle: {
    backgroundColor: 'red',
  },
  backStyle: {
    backgroundColor: 'blue',
  },
});

const Cards: React.FC<ICardsProps> = ({
  img,
  // flipped,
  // onPress,
  card,
  callback,
}) => {
  const handleClick = () => {
    if (card.clickable) {
      callback(card);
    }
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.container, styles.backStyle]}>
        {card.flipped && <Image source={img} />}
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
