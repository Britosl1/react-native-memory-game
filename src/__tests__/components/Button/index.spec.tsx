import React from 'react';
import {render} from '@testing-library/react-native';
import Button from '../../../components/Button';

describe('Snapshot test', () => {
  test('Button component', () => {
    const {toJSON} = render(<Button text="Clique aí" onPress={jest.fn()} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
