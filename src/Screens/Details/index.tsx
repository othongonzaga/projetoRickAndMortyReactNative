import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import SearchInput from '@components/SearchInput';
import TextWithImage from '@components/TextWithImage';
import ListItem from '@components/ListItem';
import CustomButton from '@components/CustomButton';
import logo from '@assets/images/logo.png';
import backArrow from '@assets/images/back-arrow.png';
import line from '@assets/images/Line.png';
import {styles} from './styles';
import {Character} from '@types/Character';

export default function DetailsScreen() {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  const fetchCharacters = async (url: string) => {
    try {
      const response = await axios.get(url);
      if (response.data && response.data.results) {
        setCharacters(prevCharacters => [
          ...prevCharacters,
          ...response.data.results,
        ]);
        setNextPageUrl(response.data.info.next || null);
      } else {
        throw new Error('Unexpected API response');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong while searching. Please try again later.');
    }
  };

  const handleSearch = (searchTerm: string) => {
    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
    setCharacters([]);
    fetchCharacters(searchUrl);
  };

  useEffect(() => {
    (async () => {
      await fetchCharacters('https://rickandmortyapi.com/api/character');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <Image source={backArrow} style={styles.backButtonImage} />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <SearchInput placeholder="Find a character" onSearch={handleSearch} />
      <TextWithImage text="Characters" imageSource={line} />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ListItem
              imageSource={{uri: item.image}}
              name={item.name}
              type={item.species}
              description={item.location.name}
            />
          )}
          ListFooterComponent={
            <View style={styles.loadMoreButton}>
              {nextPageUrl ? (
                <CustomButton
                  text="Load More"
                  onPress={() => fetchCharacters(nextPageUrl)}
                />
              ) : (
                <Text style={styles.textAfterNext}>
                  No more characters to load
                </Text>
              )}
            </View>
          }
        />
      )}
    </View>
  );
}
