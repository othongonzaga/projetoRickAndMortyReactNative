import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
