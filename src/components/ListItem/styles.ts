import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#0D7C85',
    borderRadius: 30,
    borderColor: '#EBFF6E',
    borderWidth: 4,
    elevation: 2,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 120,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textContainer: {
    justifyContent: 'center',
    paddingBottom: 40,
    paddingTop: 30,
    bottom: 45,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EBFF6E',
    paddingBottom: 30,
  },
  description: {
    fontSize: 20,
    color: '#ffff',
  },
  type: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'semibold',
    paddingBottom: 15,
  },
});
