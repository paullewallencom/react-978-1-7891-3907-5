import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  rowDisplay: {
    marginTop: height * 0.25,
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'space-between'
  },
  cardContainer: {
    height: 250,
    backgroundColor: '#DDF9D9'
  },
  textArea: {
    flex: 1,
    width
  }
});
