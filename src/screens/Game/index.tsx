import React, {useState} from 'react';
import {View, FlatList, ScrollView, Text} from 'react-native';
import {data, DataType} from '../../data';
import Cards from '../../components/Cards';
import ArrowIcon from '../../components/Icons';
import {NavigationStackProp} from 'react-navigation-stack';
import {RouteProp} from '@react-navigation/native';
import ResetGameButton from '../../components/Button/ResetGameButton';
import {shuffle} from '../../utils/gameFunctions';
import {useEffect} from 'react';
import {StringResources} from '../../utils/stringResources';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';
import VictoryModal from '../../components/Modal';
import {
  GameBottomContainer,
  GameContainer,
  GameTextContainer,
  GameTopContainer,
} from './styles';

interface IGameProps {
  navigation: NavigationStackProp<{userId: string}>;
  route: RouteProp<{params: {name: string}}, 'params'>;
}

const Game: React.FC<IGameProps> = ({navigation, route}) => {
  const {name} = route.params;
  const numColumns = 4;

  const [cards, setCards] = useState<DataType[]>(shuffle(data));
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedCard, setClickedCard] = useState<undefined | DataType>(
    undefined,
  );

  const handleGame = () => {
    // setDataState(shuffle(data));
    // setTestButton(!testButton);
    setCards(cards);
    setScore(0);
  };

  const handleCards = (currentCard: DataType) => {
    setCards(prev =>
      prev.map(card =>
        card.id === currentCard.id
          ? {...card, flipped: true, clickable: false}
          : card,
      ),
    );

    if (!clickedCard) {
      setClickedCard({...currentCard});
      setScore(score + 1);
      return;
    }

    if (clickedCard.matchingCardId === currentCard.id) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentCard.id
            ? {...card, clickable: false}
            : card,
        ),
      );
      setClickedCard(undefined);
      return;
    }

    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentCard.id
            ? {...card, flipped: false, clickable: true}
            : card,
        ),
      );
    }, 1000);

    setClickedCard(undefined);
  };

  const storeData = useCallback(async () => {
    try {
      const playerName = ['name', name];
      const playerScore = ['score', JSON.stringify(score)];
      await AsyncStorage.multiSet([playerName, playerScore]);
    } catch (e) {
      console.log('Error', e);
    }
  }, [name, score]);

  useEffect(() => {
    if (matchedPairs === cards.length / 20) {
      setModalVisible(true);
      storeData();
    }
    storeData();
  }, [cards.length, matchedPairs, storeData]);

  return (
    <View>
      <GameTopContainer>
        <ArrowIcon onPress={() => navigation.navigate('Home')} />
        <Text>{`${name} - ${StringResources.PLAYED_ROUNDS} ${score}`}</Text>
      </GameTopContainer>
      <GameContainer>
        <FlatList
          data={cards}
          numColumns={numColumns}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ScrollView>
              <Cards card={item} callback={handleCards} />
            </ScrollView>
          )}
        />
      </GameContainer>
      <GameBottomContainer>
        <GameTextContainer>{StringResources.CLICK_TO_START}</GameTextContainer>
        <ResetGameButton onPress={() => setModalVisible(true)} />
      </GameBottomContainer>
      <VictoryModal
        visible={modalVisible}
        onPressHome={() => navigation.navigate('Home')}
        onPress={() => navigation.navigate('Ranking')}
        rounds={score}
      />
    </View>
  );
};

export default Game;
