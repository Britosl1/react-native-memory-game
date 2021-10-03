import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FrontCard, BackCard} from './styles';
import {DataType} from '../../data';

interface ICardsProps {
  card: DataType;
  callback: (card: DataType) => void;
}

const Cards: React.FC<ICardsProps> = ({card, callback}) => {
  const handleClick = () => {
    if (card.clickable) {
      callback(card);
    }
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <FrontCard source={card.img} flipped={card.flipped} />
      <BackCard source={card.backImg} flipped={card.flipped} />
    </TouchableOpacity>
  );
};

export default Cards;
