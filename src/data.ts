import Card1 from '../src/images/1.png';
import Card2 from '../src/images/2.png';
import Card3 from '../src/images/3.png';
import Card4 from '../src/images/4.png';
import Card5 from '../src/images/5.png';
import Card6 from '../src/images/6.png';
import Card7 from '../src/images/7.png';
import Card8 from '../src/images/8.png';
import Card9 from '../src/images/9.png';
import Card10 from '../src/images/10.png';
import Back from '../src/images/back.png';

import {ImageSourcePropType} from 'react-native';

export type DataType = {
  id: string;
  img: ImageSourcePropType;
  backImg: ImageSourcePropType;
  flipped: boolean;
  clickable: boolean;
  matchingCardId: string;
};

const cards: ImageSourcePropType[] = [
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
];
export const data: DataType[] = [...cards, ...cards].map((card, i) => ({
  id: `card${i}`,
  flipped: false,
  img: card,
  backImg: Back,
  clickable: true,
  matchingCardId:
    i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
}));
