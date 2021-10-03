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
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [cards, setCards] = React.useState<DataType[]>(shuffle(data));
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [cardId, setCardId] = useState<DataType>();
  const [dataArray, setDataArray] = useState<DataType[]>(data);
  const [dataState, setDataState] = useState<any>();
  const [testButton, setTestButton] = useState<boolean>(true);
  const [flip, setFlip] = useState<boolean>(false);
  const [openedCard, setOpenedCard] = useState<any>([]);
  const [matched, setMatched] = useState([]);

  function flipCard(index: any) {
    setOpenedCard((opened: any) => [...opened, index]);
  }

  const numColumns = 4;

  const handleGame = () => {
    console.log('Teste:', dataArray);
    setDataState(shuffle(data));
    setTestButton(!testButton);
    setScore(0);
  };

  const handleCards = () => {
    setCards(prev =>
      prev.map(card =>
        card.id === cardId?.id
          ? {...card, flipped: true, clickable: false}
          : card,
      ),
    );
  };

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('ranking', jsonValue);
    } catch (e) {
      console.log('Error', e);
    }
  };

  useEffect(() => {
    if (matchedPairs === dataArray.length / 2) {
      console.log('Game Won!');
      setGameWon(true);
    }
    return () => setDataState(shuffle(data));
  }, [testButton, dataArray.length, matchedPairs]);

  return (
    <View>
      <View style={styles.topContainer}>
        <ArrowIcon onPress={() => navigation.navigate('Home')} />
        <Text>{`${name} - Score: ${score}`}</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={dataState}
          numColumns={numColumns}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <ScrollView>
                <Cards
                  card={item}
                  callback={handleCards}
                  // flipped={cardId?.flipped}
                  img={item.img}
                />
              </ScrollView>
            );
          }}
        />
      </View>
      <View style={styles.bottonContainer}>
        <Text style={styles.textContainer}>
          {StringResources.CLICK_TO_START}
        </Text>
        <ResetGameButton onPress={handleGame} />
      </View>
    </View>
  );
};

export default Game;
