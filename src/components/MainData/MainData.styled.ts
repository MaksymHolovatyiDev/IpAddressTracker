import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  relativeContainer: {
    position: 'relative',
    width: '100%',
  },
  dataContainer: {
    position: 'absolute',

    top: 0,
    left: 0,
    zIndex: 1,

    flex: 1,

    alignItems: 'center',

    gap: 10,

    width: '100%',

    backgroundColor: 'white',

    paddingVertical: 15,
    borderRadius: 12,
  },
  labelText: {
    fontFamily: 'Rubik-Bold',
    fontSize: 8,
    letterSpacing: 1,

    color: 'hsl(0, 0%, 59%)',

    textTransform: 'uppercase',
  },

  dataText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
  },
});
