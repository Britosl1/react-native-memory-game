import React from 'react';
import {render} from '@testing-library/react-native';
import RankingPositions from '../../../components/RankingPositions';

describe('Snapshot test', () => {
  test('Ranking component', () => {
    const {toJSON} = render(<RankingPositions name="Lucas" score="2" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
