import React from 'react';
import {render} from '@testing-library/react-native';
import ResetGameButton from '../../../components/Button/ResetGameButton';

describe('Snapshot test', () => {
  test('Reset Button component', () => {
    const {toJSON} = render(<ResetGameButton onPress={jest.fn()} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
