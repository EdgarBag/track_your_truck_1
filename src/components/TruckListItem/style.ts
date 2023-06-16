import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, borderColor: '#008080', borderRadius: 8,
    margin: 5,
    padding: 10,
    marginBottom: 16,
  },
  title: {
    opacity: 0.5, color: 'black',
    fontSize: Dimensions.get('screen').width * 0.035
  },
  value: {
    color: 'black',
    fontSize: Dimensions.get('screen').width * 0.035,
    fontWeight: 'bold'

  }

});
