/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    view1: {
      flex: 3,
      backgroundColor: '#70d4b4',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.9,
    },
    view2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      height: 30,
      width:30,
      marginRight:4,
    },
    text: {
      color: '#000',
      fontSize: 20,
      margin: 6,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily:'Arial',
    },
    button: {
      width: 250,
      height: 50,
      backgroundColor: '#fcb241',
      alignItems: 'center',
      padding:10,
      margin: 20,
      borderRadius: 10,
    },
    logo: {
      marginTop:20,
      width: 250,
      height: 102,
    },
    image: {
      width: 376,
      height: 350,
    },
    footer: {
      textAlign: 'justify',
      textAlignVertical: 'bottom',
      color:'grey',
    },
    textbtn: {
      color: '#000',
     fontSize:20,
  textAlign:'center',
  marginBottom:2,
    },
    row:{
      flexDirection:'row',
      alignItems:'space-between',
      justifyContent:'center',
    },
  });
  export default styles;