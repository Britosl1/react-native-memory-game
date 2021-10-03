import React from 'react';
import {StringResources} from '../../utils/stringResources';
import Button from '../../components/Button';
import {NavigationStackProp} from 'react-navigation-stack';
import {useState} from 'react';
import {
  HomeContainer,
  HomeInput,
  HomeSubtitleText,
  HomeTitleContainer,
  HomeTitleText,
} from './styles';

interface IHomeProps {
  navigation: NavigationStackProp<{userId: string}>;
}

const Home: React.FC<IHomeProps> = ({navigation}) => {
  const [name, setName] = useState<string>('');

  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitleText>{StringResources.WELCOME}</HomeTitleText>
      </HomeTitleContainer>
      <HomeInput
        textAlign="center"
        textAlignVertical="center"
        onChangeText={setName}
        value={name}
        placeholder={StringResources.ENTER_NAME}
      />
      {name ? (
        <Button
          text={StringResources.START_GAME}
          onPress={() => navigation.navigate('Game', {name: name})}
        />
      ) : (
        <HomeSubtitleText>
          {StringResources.TYPE_YOUR_NAME_TO_PLAY}
        </HomeSubtitleText>
      )}
      <Button
        text={StringResources.RANKING}
        onPress={() => navigation.navigate('Ranking')}
      />
    </HomeContainer>
  );
};

export default Home;
