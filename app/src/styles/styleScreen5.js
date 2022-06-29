/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        flex: 1,
        fontFamily: 'Arial',
        backgroundColor: '#70d4b4',

    },
      modal: {
        flex: 2,
        backgroundColor: '#70d4b4',
        height:400,
        width:400,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      imagemod:{
        width: 400,
        height: 400,
        resizeMode:'stretch',
      },
    view1: {
        flex: 1,
        backgroundColor: '#70d4b4',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    view2: {
        flex: 2,
        alignItems: 'stretch',
        backgroundColor:'#fff',
    },
    view22: {
        margin: 10,
        alignItems: 'center',
        borderColor:'grey',
        borderWidth:0.8,
        overflow:'hidden',
        elevation:2,
        },
    view3: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
    icon: {
        height: 20,
        width: 20,
        marginHorizontal: 10,
        marginTop: 5,

    },
    iconclose: {
        margin:10,
        height: 20,
        width: 20,
    },
    text: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textimg: {
        color: '#000',
        fontSize: 12,
        marginTop:5,
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'top',
        textTransform:'uppercase',
    },
    button1: {
        color: '#388186',
        fontSize:15,
        textAlignVertical:'bottom',
        margin:3,
        fontWeight:'bold',
        textAlign:'center',
    },
    logo: {
        marginTop:9,
        width: 250,
        height: 70,
    },
    image: {
        height: 130,
        width: 140,
        marginRight:1,
    },
    imageAfter: {
        height: 140,
        width: 120,
        resizeMode:'cover',
        marginLeft:200,
    },
    footertxt: {
        textAlign: 'justify',
        textAlignVertical: 'bottom',
    },
    textbtn: {
        color: '#000',
        fontSize: 20,
    },
    footer: {
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    btnenvoi: {
        width: 200,
        height: 35,
        backgroundColor: '#fcb241',
        alignItems: 'center',
        borderRadius: 10,
        padding: 2,
    },
    views: {
        flexDirection: 'row',
    },
    icons: {
        flexDirection: 'row-reverse',
        alignItems: 'stretch',
        marginTop:10,
    },
    borders: {
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flex:3,
        backgroundColor:'#fff',
    },
});
export default styles;
