import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ArrowIcon from '../../components/Icons';
import RankingPositions from '../../components/RankingPositions';
import {NavigationStackProp} from 'react-navigation-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  RankingContainer,
  RankingTextContainer,
  RankingListContainer,
} from './styles';

interface IRankingProps {
  navigation: NavigationStackProp<{userId: string}>;
}

const Ranking: React.FC<IRankingProps> = ({navigation}) => {
  type RankType = {
    id?: string;
    name: Promise<string> | string;
    score: Promise<string> | string;
  };
  const [ranking, setRanking] = useState<RankType[]>([]);

  const getData = async () => {
    try {
      const nameValue = await AsyncStorage.getItem('name');
      const scoreValue = await AsyncStorage.getItem('score');
      if (nameValue && scoreValue !== null) {
        setRanking([{name: nameValue, score: scoreValue}]);
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <RankingContainer>
      <ArrowIcon onPress={() => navigation.navigate('Home')} />
      <RankingListContainer>
        <RankingTextContainer>We are the champions!</RankingTextContainer>
      </RankingListContainer>
      <FlatList
        data={ranking}
        // keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <RankingPositions score={item.score} name={item.name} />;
        }}
      />
    </RankingContainer>
  );
};

export default Ranking;
