import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3A40',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: '105%',
    height: 90,
    marginTop: 40,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -240,
  },
  buttonContainer: {
    marginBottom: 70,
  },
  message: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#EBFF6E',
    paddingBottom: 20,
    textAlign: 'center',
  },
  messageNotFound: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
