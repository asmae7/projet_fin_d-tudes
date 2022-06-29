/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View,Date, Image, TouchableOpacity,useWindowDimensions } from 'react-native';
import LocationEnabler from 'react-native-location-enabler';
import styles from './styles/styleScreen1';
import moment from 'moment';
export default function Screen1({ navigation }) {
  const { height, width } = useWindowDimensions();
  const onPressHandler = () => {
    navigation.navigate('Screen2');
  };
  const {
    PRIORITIES: { HIGH_ACCURACY },
    useLocationSettings,
  } = LocationEnabler;
//const today = new Date();
console.log(moment().format());
  // React Component
    const [enabled, requestResolution] = useLocationSettings(
      {
        priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
        alwaysShow: true, // default false
        needBle: true, // default false
      },
      false /* optional: default undefined */
    );
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{
       flexDirection: 'column',
       backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      flex: 1,
      height:height,
      width: width,
     }}>
      <View style={styles.view1}>
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
          Envoyer vos documents de productions en toute simplicité
        </Text>
        <View>
          <Image
            style={styles.image}
            source={
              require('./assets/hero-uqrme.png')
            }
            resizeMode="stretch"
          />
        </View>
      </View>
      <View style={styles.view2}>
        <View>
        <TouchableOpacity activeOpacity={0.3}
            onPressIn={requestResolution}
            onPressOut={onPressHandler}
          style={styles.button}>
            <View style={styles.row}>
              <Image
              source={
                require('./assets/qr-code.png')
              }
              style={styles.icon}
              />
                   <Text style={styles.textbtn}>Scanner le QRcode</Text>
</View>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>
          Copyright © SANLAM Maroc 2022
        </Text>
      </View>
    </View>
  );
}

