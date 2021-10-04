import React from 'react';
import {render} from '@testing-library/react-native';
import VictoryModal from '../../../components/Modal';

describe('Snapshot test', () => {
  test('Modal component', () => {
    const {toJSON} = render(
      <VictoryModal
        onPress={jest.fn()}
        onPressHome={jest.fn()}
        rounds={2}
        visible={true}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
