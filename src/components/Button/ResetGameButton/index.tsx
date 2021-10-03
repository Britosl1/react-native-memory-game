import React from 'react';
import {Image} from 'react-native';
import ResetIcon from '../../../images/reset-arrow.png';
import {ResetButtonContainer} from './styles';

interface IResetGameButtonProps {
  onPress: () => void;
}

const ResetGameButton: React.FC<IResetGameButtonProps> = ({onPress}) => {
  return (
    <ResetButtonContainer onPress={onPress}>
      <Image source={ResetIcon} />
    </ResetButtonContainer>
  );
};

export default ResetGameButton;
