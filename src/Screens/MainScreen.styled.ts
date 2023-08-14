import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',

    gap: 25,

    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height / 3,

    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  mainText: {
    color: 'white',

    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    letterSpacing: 1,

    marginTop: 10,
  },
});
