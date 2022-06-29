/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        flex: 1,
        fontFamily: 'Arial',
    },
    viewS21: {
        flex: 3,
        backgroundColor: '#70d4b4',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    viewS22: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        width: 250,
        height: 65,
        backgroundColor: '#fcb241',
        alignItems: 'center',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    logo: {
        width: 250,
        height: 102,
    },
    image: {
        width: 160,
        height: 160,
        padding: 10,
        margin: 50,
    },
    footer: {
        textAlign: 'justify',
        textAlignVertical: 'bottom',
            color:'grey',
    },
    textbtn: {
        color: '#000',
        fontSize: 20,
    },
});
export default styles;