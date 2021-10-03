import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface IRankingPositionsProps {
  name: string;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 30,
    backgroundColor: '#3c1361',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
  },
});

const RankingPositions: React.FC<IRankingPositionsProps> = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default RankingPositions;
