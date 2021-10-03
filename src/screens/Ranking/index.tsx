import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ArrowIcon from '../../components/Icons';
import RankingPositions from '../../components/RankingPositions';
import {NavigationStackProp} from 'react-navigation-stack';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

interface IRankingProps {
  navigation: NavigationStackProp<{userId: string}>;
}

const styles = StyleSheet.create({
  container: {padding: 50, backgroundColor: 'pink'},
});

const Ranking: React.FC<IRankingProps> = ({navigation}) => {
  const [ranking, setRanking] = useState<any>([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('ranking');
      if (value !== null) {
        setRanking({name: value, score: value});
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <View style={styles.container}>
      <ArrowIcon onPress={() => navigation.navigate('Home')} />
      <View>
        <FlatList
          data={ranking}
          renderItem={({item, index}) => {
            return (
              <RankingPositions
                name={`${index}- ${item.name}`}
                score={item.score}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Ranking;
