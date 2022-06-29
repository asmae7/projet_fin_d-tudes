/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles/styleScreen2';
export default function Screen2({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('Screen4');
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
          Merci de scanner le QRcode affiché sur votre écran MyAuto
        </Text>
      </View>
      <View style={styles.viewS22}>
        <TouchableOpacity activeOpacity={0.3}
          onPress={onPressHandler}>
          <Image style={styles.image}
          source={require('./assets/qr-code-scan.png')} />
          </TouchableOpacity>
        <Text style={styles.footer}>
          Copyright © SANLAM Maroc 2022
        </Text>
      </View>
    </View>
  );
}

