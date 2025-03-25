import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home.js';
import Login from './Screens/Login.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
