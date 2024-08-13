import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>
        Go to Home
      </Button>
    </View>
  );
}

function ScreenWrapper({ Component }) {
  const navigation = useNavigation();

  return <Component navigation={navigation} />;
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: (props) => <ScreenWrapper {...props} Component={HomeScreen} />,
    Details: (props) => <ScreenWrapper {...props} Component={DetailsScreen} />,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
