import{View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function Login(){
    return(
        <View style={styles.containerLogin}>
            <ImageBackground source={require('../assets/background_image.jpg')}/>

            <Text style={styles.textTitle}>LOGIN</Text>

            <Image style={styles.img} source={require('../assets/ornitorrinco.jpg')}/>

            <TextInput
            placeholder='Mensagem'
            placeholderTextColor={'white'}
            />

            <Button
            title='Enviar'
            color={'#193CFF'}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    containerLogin:{
        flex: 1,
        color: '#FFFFFF'
    },
    textTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    img:{
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
})