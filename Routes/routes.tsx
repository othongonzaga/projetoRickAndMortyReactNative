import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
