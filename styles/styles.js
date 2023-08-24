import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cornerText: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  whiteCornerText: {
    color: 'white',
  },
  blackCornerText: {
    color: 'black',
  },
});

export default styles;
