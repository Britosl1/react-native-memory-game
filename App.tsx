import React from 'react';

import Game from './src/screens/Game';
// import Game from './src/screens/Game';
import Home from './src/screens/Home';
import Ranking from './src/screens/Ranking';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Ranking"
            component={Ranking}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
