import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchInput from '@components/SearchInput';
import TextWithImage from '@components/TextWithImage';
import ListItem from '@components/ListItem';
import logo from '@assets/images/logo.png';
import backArrow from '@assets/images/back-arrow.png';
import line from '@assets/images/Line.png';
import {styles} from './styles';

export default function DetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <Image source={backArrow} style={styles.backButtonImage} />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <SearchInput placeholder="Find a character" />
      <TextWithImage text="Characters" imageSource={line} />
      <ListItem
        imageSource={{
          uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        }}
        name="Rick Sanchez"
        type="Human"
        description="Citadel of Ricks"
      />
    </View>
  );
}
