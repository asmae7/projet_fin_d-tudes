/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import styles  from './styles/styleScanner';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
const ScanScreen = ({navigation}) => {
    const [scan, setScan] = useState(true);
    const onSuccess = (e) => {
        setScan(false);
        // eslint-disable-next-line no-undef
        console.log(typeof (e.data));
        const obj = JSON.parse(e.data);
        console.log(obj.policyNumber);
        axios
        .get(`http://192.168.1.108:3001/Qr_Code_Content/${obj.policyNumber}`)
  .then(function (response) {
      const data = response.data[0].n_police;
      if (response.status === 200)
     { if  (data.length > 0)
      {
        console.log(data);
        navigation.navigate('Screen6',{
            paramKey: obj.policyNumber ,
            id:response.data[0].id,
        });
      }
    }
  })
  .catch(function (error) {
    // handle error
    //let message = typeof error.response !== "undefined" ? error.response.data.message : error.message;
    alert('aucun utilisateur');
    console.log(error);
    navigation.navigate('Screen2');
        })
        .finally(function () {
          // always executed
          console.log('Finally called');
        });
    };
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        {scan &&
                            <View style={styles.sectionContainer}>
                                <QRCodeScanner
                                    reactivate={true}
                                    onRead={onSuccess}
                                    topContent={
                                        <Text style={styles.centerText}>
                                            Scanner!
                                        </Text>
                                    }
                                    bottomContent={
                                        <TouchableOpacity style={styles.buttonTouchable} onPress={()=> navigation.goBack()}>
                                            <Text style={styles.buttonText}>Annuler</Text>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );


};
export default ScanScreen;

