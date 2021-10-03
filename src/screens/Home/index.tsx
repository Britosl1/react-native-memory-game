import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {StringResources} from '../../utils/stringResources';
import Button from '../../components/Button';
import {NavigationStackProp} from 'react-navigation-stack';
import {useState} from 'react';

interface IHomeProps {
  navigation: NavigationStackProp<{userId: string}>;
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: '#3c1361',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 6,
    backgroundColor: 'blue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#d0d0d0',
    marginBottom: 20,
    borderRadius: 10,
  },
  titleText: {
    fontWeight: '800',
    fontSize: 20,
    color: '#b491c8',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontWeight: '400',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
});

const Home: React.FC<IHomeProps> = ({navigation}) => {
  const [name, setName] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{StringResources.WELCOME}</Text>
      </View>
      <TextInput
        style={styles.input}
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
        <Text style={styles.subtitleText}>
          {StringResources.TYPE_YOUR_NAME_TO_PLAY}
        </Text>
      )}
      <Button
        text={StringResources.RANKING}
        onPress={() => navigation.navigate('Ranking')}
      />
    </View>
  );
};

export default Home;
