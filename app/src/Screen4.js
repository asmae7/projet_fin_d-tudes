/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import { Text, View, Image,BackHandler, TouchableOpacity } from 'react-native';
import styles from './styles/styleScreen4';
import axios from 'axios';
export default function Screen4({ navigation,route }) {
    const [date, setDate] = useState(null);
  useEffect(() => {
    let today = new Date();
    setDate(today);
  }, []);
    const onPressHandler = () => {
        navigation.navigate('Screen5',
        {
            paramKey:route.params.paramKey,
            id:route.params.id,
        });
    };
    return (
        <View style={styles.body}>
            <View style={styles.viewS21}>
                <View>
                    <Image
                        style={styles.logo}
                        source={
                            require('./assets/logo_sanlam.png')
                        }
                        resizeMode="stretch"
                    />
                </View>
                <Text style={styles.text}>
                    Envoyer les photos de véhicule pour le numéro de police {route.params.paramKey}
                    </Text>
            </View>
            <View style={styles.viewS22}>
                <TouchableOpacity activeOpacity={0.3} style={styles.button}
                    onPress={onPressHandler}>
                    <Text style={styles.textbtn}>Prendre les photos</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>
                    Copyright © SANLAM Maroc 2022
                </Text>
            </View>
        </View>
    );
}

