/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import { View,StyleSheet,Image,Animated,Text,BackHandler,Alert } from 'react-native';
import styles from './styles/styleScreen4';
class ScreenOK extends Component{
    backAction = () => {
        Alert.alert('alert','vous voulez vraiment fermer application?', [
          {
            text: 'Anuuler',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'oui', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };
      componentWillUnmount() {
        this.backHandler.remove();
      }
    state={
        LogoAnime:new Animated.Value(0),
        loadingSpinner: false,
    };
    componentDidMount() {
        const { LogoAnime } = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime,
                {
                    toValue: 1,
                    tension: 10,
                    friction: 2,
                    duration: 1000,
                    useNativeDriver: false,
                }
            ).start(() => {
                this.setState({
                    loadingSpinner: true,
                });
               // setTimeout(this.props.navigation.navigate('Screen1'), 1200);
            }),
        ]);
        this.backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            this.backAction
          );
    }
    render() {
        return (
            <View style={style.body}>
                <Animated.View style={{
                    opacity: this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange:[80,0],
                    }),
                }}>
                    <Image
                        source={require('./assets/logo_sanlam.png')}
                        style={style.image}
                    />
                    <Text style={style.text}>vos données sont enregistrées avec succés</Text>
                </Animated.View>
                <Text style={style.footer}>
          Copyright © SANLAM Maroc 2022
        </Text>
            </View>
        );
    }
    }
const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#70d4b4',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    text: {
        color: '#000',
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    image: {
        width: 320,
        height: 100,
        resizeMode:'cover',
        alignContent:'center',
        marginHorizontal:10,
    },
    footer: {
        textAlign: 'justify',
        textAlignVertical: 'bottom',
            color:'grey',
            alignItems:'flex-end',
            marginTop:160,
    },
});
export default ScreenOK;
