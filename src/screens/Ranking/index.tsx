import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ArrowIcon from '../../components/Icons';
import RankingPositions from '../../components/RankingPositions';
import {NavigationStackProp} from 'react-navigation-stack';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IRankingProps {
  navigation: NavigationStackProp<{userId: string}>;
}

const styles = StyleSheet.create({
  container: {padding: 50, backgroundColor: 'pink'},
});

const Ranking: React.FC<IRankingProps> = ({navigation}) => {
  const [ranking, setRanking] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('ranking');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <ArrowIcon onPress={() => navigation.navigate('Home')} />
      <View>
        <FlatList
          data={ranking}
          renderItem={({item}) => {
            return <RankingPositions name={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Ranking;
