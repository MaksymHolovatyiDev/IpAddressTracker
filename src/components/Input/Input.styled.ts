import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,

    flex: 1,

    fontFamily: 'Rubik-Regular',

    backgroundColor: 'white',

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 18,
  },
  btn: {
    height: 50,
    width: 50,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'black',

    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
