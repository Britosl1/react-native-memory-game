import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonContainer, ButtonText} from './styles';

interface IButtonProps {
  onPress: () => void;
  text: string;
}

const Button: React.FC<IButtonProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
