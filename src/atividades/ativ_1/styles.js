import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#61ff76',
       padding: 8,
    },
    titulo: {
        //fontSize: 20,
        fontSize: RFValue(20),
        color: '#340fab',
    },
});

export default styles;