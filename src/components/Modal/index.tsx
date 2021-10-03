import React from 'react';
import {Modal} from 'react-native';
import {StringResources} from '../../utils/stringResources';
import Button from '../Button';
import {ModalContainer, VictoryText, TextContainer} from './styles';

interface IVictoryModalProps {
  visible: boolean;
  onPress: () => void;
  onPressHome: () => void;
  rounds: number;
}

const VictoryModal: React.FC<IVictoryModalProps> = ({
  visible,
  onPress,
  onPressHome,
  rounds,
}) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <ModalContainer>
        <TextContainer>
          <VictoryText>{StringResources.VICTORY}</VictoryText>
          <VictoryText>{`${StringResources.NUMBER_OF_ROUNDS} ${rounds}`}</VictoryText>
        </TextContainer>
        <Button text={StringResources.PLAY_AGAIN} onPress={onPressHome} />
        <Button text={StringResources.RANKING} onPress={onPress} />
      </ModalContainer>
    </Modal>
  );
};

export default VictoryModal;
