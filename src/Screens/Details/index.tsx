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
import {Character, ApiReturn} from '@types/Character';
import {CacheItems} from '@types/Character';

export default function DetailsScreen() {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [cacheCharacters, setCacheCharacters] = useState<Character[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [keyCache, setkeyCache] = useState<string[]>([]);
  const [cacheItems, setCacheItems] = useState<CacheItems[]>([]);

  const fetchCharacters = async (url: string) => {
    try {
      const response: ApiReturn = await axios.get(url);

      if (response && response.data.results) {
        setCharacters(prevCharacters => [
          ...prevCharacters,
          ...response.data.results,
        ]);
        setNextPageUrl(response.data.info.next || null);
        return response;
      } else {
        throw new Error('Unexpected API response');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong while searching. Please try again later.');
    }
  };

  const handleSearch = async (searchTerm: string) => {
    if (keyCache.includes(searchTerm)) {
      const searchCachedData = cacheItems.filter(({key}) => {
        return key === searchTerm;
      });
      if (searchCachedData.length >= 1) {
        setCacheCharacters(searchCachedData[0].data);
        setIsFiltered(true);
        setNextPageUrl(null);
      }
    } else {
      const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
      try {
        const fetchResponse = await fetchCharacters(searchUrl);

        if (fetchResponse?.data && fetchResponse?.data.results) {
          setkeyCache(prev => {
            return [...prev, searchTerm];
          });

          setCacheItems(prev => {
            return [
              ...prev,
              {
                key: searchTerm,
                data: fetchResponse.data.results,
              },
            ];
          });

          setIsFiltered(true);
          setCacheCharacters(fetchResponse?.data.results);
          setNextPageUrl(null);
        } else {
          throw new Error('Unexpected API response');
        }
      } catch (error) {
        console.error(error);
        setError(
          'Something went wrong while searching. Please try again later.',
        );
      }
    }
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
          data={isFiltered ? cacheCharacters : characters}
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
