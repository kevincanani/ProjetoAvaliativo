import{View, Text, Image, StyleSheet} from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function Home(){
    return(
        <View style={styles.containerHome}>
            <ImageBackground source={require('../assets/background_image.jpg')}/>

            <Text style={styles.textTitle}>ORNITORRINCO</Text>

        <View style={styles.containerTxt}>
            <Text style={styles.textParagrafo}>O ornitorrinco é um animal extremamente exótico que apresenta características que lembram as de aves e répteis, uma vez que possui bico e é capaz de botar ovos. É um animal encontrado apenas na Austrália e que apresenta hábito de vida semiaquático, sendo observado exclusivamente em ambientes de água doce.</Text>
        </View>

        <View style={styles.containerImg}>
            <Image style={styles.img} source={require('../assets/ornitorrinco.jpg')}/>
            <Image style={styles.img} source={{uri: 'https://peregrinacultural.com/wp-content/uploads/2009/06/platypus3.jpg?w=584'}}/>
        </View>

        <View style={styles.containerTxt}>
            <Text style={styles.textParagrafo}>O ornitorrinco é um animal carnívoro que se alimenta de pequenos animais, como insetos e camarões. Os machos são capazes de produzir veneno, sendo essa substância utilizada para a defesa do território no período reprodutivo.</Text>
        </View>

        <View style={styles.containerImg}>
            <Image style={styles.img} source={require('../assets/ornitorrinco_agua.webp')}/>
            <Image style={styles.img} source={{uri: 'https://pm1.aminoapps.com/8169/cb84550a7f5345571a22c5c1ea86b64a37cbb76ar1-360-360v2_00.jpg'}}/>
        </View>

        <View style={styles.containerTxt}>
            <Text style={styles.textParagrafo}>Uma característica interessante a respeito dos ornitorrincos é que os machos produzem venenos, atributo pouco comum no grupo dos mamíferos.</Text>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
        color: '#FFFFFF'
    },
    textTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textParagrafo:{
        alignSelf: 'center',
        paddingLeft: 70,
        paddingRight: 70
    },
    containerTxt:{
        padding: 20
    },
    containerImg:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img:{
        width: 150,
        height: 150,
    }
})