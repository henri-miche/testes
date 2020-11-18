import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mainstack from './src/MainStack/MainStack';

export default function App() {
  return (
    <NavigationContainer>
        <Mainstack />
      </NavigationContainer>
  );
}

