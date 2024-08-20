import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3A40',
    padding: 30,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonImage: {},
  logo: {
    alignSelf: 'center',
    width: '105%',
    height: 90,
    marginVertical: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  loadMoreButton: {
    marginVertical: 180,
  },
});
