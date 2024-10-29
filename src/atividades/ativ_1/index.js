import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Exemplo1() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Introducao react native</Text>
            <Text style={styles.titulo}>aula 1</Text>
        </View>
    );
};