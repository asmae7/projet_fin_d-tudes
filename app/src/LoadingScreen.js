/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import { View,StyleSheet,Image,Animated,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/styleScreen4';
class LoadingScreen extends Component{
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
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen1')}
                    style={style.button}>
                        <Text style={styles.text}>Se commencer</Text>
                    </TouchableOpacity>
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
            marginTop:90,
    },
    button: {
        width: 200,
        height: 70,
        backgroundColor: '#fcb241',
        alignItems: 'center',
        padding:10,
        margin: 70,
        borderRadius: 10,
      },
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
});
export default LoadingScreen;
