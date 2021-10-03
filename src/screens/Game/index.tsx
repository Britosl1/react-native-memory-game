import React, {useState} from 'react';
import {View, FlatList, StyleSheet, ScrollView, Text} from 'react-native';
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

interface IGameProps {
  navigation: NavigationStackProp<{userId: string}>;
  route: RouteProp<{params: {name: string}}, 'params'>;
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: '#bca0dc',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 50,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#7c5295',
    color: 'white',
    paddingHorizontal: 20,
  },
  bottonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3c1361',
  },
  textContainer: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textAlign: 'left',
  },
});

const Game: React.FC<IGameProps> = ({navigation, route}) => {
  const {name} = route.params;
  const [cards, setCards] = useState<DataType[]>(shuffle(data));
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedCard, setClickedCard] = React.useState<undefined | DataType>(
    undefined,
  );

  const numColumns = 4;

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
      await AsyncStorage.multiSet([
        ['name', name],
        ['score', JSON.stringify(score)],
      ]);
    } catch (e) {
      console.log('Error', e);
    }
  }, [name, score]);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setModalVisible(true);
    }
    storeData();
  }, [cards.length, matchedPairs, storeData]);

  return (
    <View>
      <View style={styles.topContainer}>
        <ArrowIcon onPress={() => navigation.navigate('Home')} />
        <Text>{`${name} - ${StringResources.PLAYED_ROUNDS} ${score}`}</Text>
      </View>
      <View style={styles.container}>
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
      </View>
      <View style={styles.bottonContainer}>
        <Text style={styles.textContainer}>
          {StringResources.CLICK_TO_START}
        </Text>
        <ResetGameButton onPress={() => setModalVisible(true)} />
      </View>
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
