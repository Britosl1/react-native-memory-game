import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface IRankingPositionsProps {
  name: string;
  score: number;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 30,
    backgroundColor: '#3c1361',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: '900',
    fontSize: 14,
  },
});

const RankingPositions: React.FC<IRankingPositionsProps> = ({name, score}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Name: ${name}`}</Text>
      <Text style={styles.text}>{`Score: ${score}`}</Text>
    </View>
  );
};

export default RankingPositions;
