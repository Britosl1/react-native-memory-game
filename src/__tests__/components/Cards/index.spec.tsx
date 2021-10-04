import React from 'react';
import {render} from '@testing-library/react-native';
import Cards from '../../../components/Cards';
import {DataType} from '../../../data';
import Img from '../../../images/1.png';

describe('Snapshot test', () => {
  test('Card component', () => {
    const data: DataType = {
      id: '1',
      clickable: false,
      flipped: false,
      matchingCardId: '1',
      backImg: Img,
      img: Img,
    };
    const {toJSON} = render(<Cards callback={jest.fn()} card={data} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
