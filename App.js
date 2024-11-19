import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo1 from './src/exemplos/ex_01';
import Exemplo2 from './src/exemplos/ex_02';
import Atividade1 from './src/atividades/ativ_1';
import Atividade2 from './src/atividades/ativ_02';


import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding: 16,
    paddingTop: Constants.statusBarHeight || 16,
  },
});
