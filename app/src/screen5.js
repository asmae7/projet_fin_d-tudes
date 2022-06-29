/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import { Modal,Pressable,useWindowDimensions,BackHandler, Text, View, Image, ImageBackground, ToastAndroid, Alert, TouchableOpacity,Platform,PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Geolocation from 'react-native-geolocation-service';
import styles from './styles/styleScreen5';
import Image1 from './assets/avant_conducteur.png';
import Image2 from './assets/passager_avant.png';
import Image3 from './assets/arriere_conducteur.png';
import Image4 from './assets/passager_arriere.png';
import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';
import moment from 'moment';
export default function Screen5({ navigation ,route}) {
     const [forceLocation, setForceLocation] = useState(true);
    const [highAccuracy, setHighAccuracy] = useState(true);
    const [locationDialog, setLocationDialog] = useState(true);
   // const [foregroundService, setForegroundService] = useState(false);
    const [useLocationManager, setUseLocationManager] = useState(false);
    const [location1, setLocation1] = useState(null);
    const [Longitude1,setLongitude1] = useState(null);
    const [Latitude1,setLatitude1] = useState(null);
    const [location2, setLocation2] = useState(null);
    const [Longitude2,setLongitude2] = useState(null);
    const [Latitude2,setLatitude2] = useState(null);
    const [location3, setLocation3] = useState(null);
    const [Longitude3,setLongitude3] = useState(null);
    const [Latitude3,setLatitude3] = useState(null);
    const [location4, setLocation4] = useState(null);
    const [Longitude4,setLongitude4] = useState(null);
    const [Latitude4,setLatitude4] = useState(null);
    const [Base641,setBase641] = useState(null);
    const [filename1,setFileName1] = useState(null);
    const [imagemime1,setImageMime1] = useState(null);
    const [Base642,setBase642] = useState(null);
    const [filename2,setFileName2] = useState(null);
    const [imagemime2,setImageMime2] = useState(null);
    const [Base643,setBase643] = useState(null);
    const [filename3,setFileName3] = useState(null);
    const [imagemime3,setImageMime3] = useState(null);
    const [Base644,setBase644] = useState(null);
    const [filename4,setFileName4] = useState(null);
    const [imagemime4,setImageMime4] = useState(null);
   // const watchId = useRef(null);
    const hasLocationPermission = async () => {
        if (Platform.OS === 'android' && Platform.Version < 23) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        }

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show(
                'Location permission denied by user.',
                ToastAndroid.LONG,
            );
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show(
                'Location permission revoked by user.',
                ToastAndroid.LONG,
            );
        }

        return false;
    };
    const getLocation1 = async () => {
        const hasPermission = await hasLocationPermission();

        if (!hasPermission) {
            return;
        }

        Geolocation.getCurrentPosition(
            (position) => {
                setLocation1(position);
                setLongitude1(position.coords.longitude);
                setLatitude1(position.coords.latitude);

            },
            (error) => {
                Alert.alert(`Code ${error.code}`, error.message);
                setLocation1(null);
                console.log(error);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: highAccuracy,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: forceLocation,
                forceLocationManager: useLocationManager,
                showLocationDialog: locationDialog,
            },
        );
    };
    const getLocation2 = async () => {
      const hasPermission = await hasLocationPermission();

      if (!hasPermission) {
          return;
      }

      Geolocation.getCurrentPosition(
          (position) => {
              setLocation2(position);
              setLongitude2(position.coords.longitude);
              setLatitude2(position.coords.latitude);

          },
          (error) => {
              Alert.alert(`Code ${error.code}`, error.message);
              setLocation2(null);
              console.log(error);
          },
          {
              accuracy: {
                  android: 'high',
                  ios: 'best',
              },
              enableHighAccuracy: highAccuracy,
              timeout: 15000,
              maximumAge: 10000,
              distanceFilter: 0,
              forceRequestLocation: forceLocation,
              forceLocationManager: useLocationManager,
              showLocationDialog: locationDialog,
          },
      );
  };
  const getLocation3 = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
        return;
    }

    Geolocation.getCurrentPosition(
        (position) => {
            setLocation3(position);
            setLongitude3(position.coords.longitude);
            setLatitude3(position.coords.latitude);

        },
        (error) => {
            Alert.alert(`Code ${error.code}`, error.message);
            setLocation3(null);
            console.log(error);
        },
        {
            accuracy: {
                android: 'high',
                ios: 'best',
            },
            enableHighAccuracy: highAccuracy,
            timeout: 15000,
            maximumAge: 10000,
            distanceFilter: 0,
            forceRequestLocation: forceLocation,
            forceLocationManager: useLocationManager,
            showLocationDialog: locationDialog,
        },
    );
};
const getLocation4 = async () => {
  const hasPermission = await hasLocationPermission();

  if (!hasPermission) {
      return;
  }

  Geolocation.getCurrentPosition(
      (position) => {
          setLocation4(position);
          setLongitude4(position.coords.longitude);
          setLatitude4(position.coords.latitude);

      },
      (error) => {
          Alert.alert(`Code ${error.code}`, error.message);
          setLocation4(null);
          console.log(error);
      },
      {
          accuracy: {
              android: 'high',
              ios: 'best',
          },
          enableHighAccuracy: highAccuracy,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: forceLocation,
          forceLocationManager: useLocationManager,
          showLocationDialog: locationDialog,
      },
  );
};
const [date, setDate] = useState(null);
const [date1, setDate1] = useState(null);
const [date2, setDate2] = useState(null);
const [date3, setDate3] = useState(null);
const [date4, setDate4] = useState(null);
  useEffect(() => {
    setDate(moment().format());
  }, []);
  const send = () =>{
    if (image1 === Image.resolveAssetSource(Image1).uri || image2 === Image.resolveAssetSource(Image2).uri || image3 === Image.resolveAssetSource(Image3).uri || image4 === Image.resolveAssetSource(Image4).uri )
    {
      ToastAndroid.show('Attention! il faut predre les quatre photos de votre véhicule!', ToastAndroid.SHORT);
    }
    else
{
  axios.post(`http://192.168.1.108:3001/vehicule_data`,{
    date:date,
    id_police:route.params.id,
  })
  .then(response2 =>  axios.get(`http://192.168.1.108:3001/vehicule_data/${response2.data}`)
  .then(function (response1) {
axios.post('http://192.168.1.108:3001/images',{
extention:imagemime1,
base64:Base641,
upload_date:date1,
name_file:filename1,
id_vehicule:response1.data[0].id,
})
.then(response =>
axios.post('http://192.168.1.108:3001/localisation',{
longitude:Longitude1,
latitude:Latitude1,
id_vehicule:response1.data[0].id,
id_image:response.data,
}));
axios.post('http://192.168.1.108:3001/images',{
extention:imagemime2,
base64:Base642,
upload_date:date2,
name_file:filename2,
id_vehicule:response1.data[0].id,
})
.then(response =>
axios.post('http://192.168.1.108:3001/localisation',{
longitude:Longitude2,
latitude:Latitude2,
id_vehicule:response1.data[0].id,
id_image:response.data,
}));
axios.post('http://192.168.1.108:3001/images',{
extention:imagemime3,
base64:Base643,
upload_date:date3,
name_file:filename3,
id_vehicule:response1.data[0].id,
})
.then(response =>
axios.post('http://192.168.1.108:3001/localisation',{
longitude:Longitude3,
latitude:Latitude3,
id_vehicule:response1.data[0].id,
id_image:response.data,
}));
axios.post('http://192.168.1.108:3001/images',{
extention:imagemime4,
base64:Base644,
upload_date:date4,
name_file:filename4,
id_vehicule:response1.data[0].id,
})
.then(response =>
axios.post('http://192.168.1.108:3001/localisation',{
longitude:Longitude4,
latitude:Latitude4,
id_vehicule:response1.data[0].id,
id_image:response.data,
}));
  }));
navigation.navigate('ScreenOk');
}
  };
        const onPressHandler1 = () => {
            ImagePicker.openCamera({
              height: 130,
              width: 140,
                cropping: true,
            }).then(image1 => {
                getLocation1();
                setImage1(image1.path);
                const filePath = image1.path;
                setFileName1(filePath.replace(/^.*[\\\/]/, ''));
                console.log(filename1);
                  setDate1(moment().format());
                  setImageMime1(image1.mime);
                ImgToBase64.getBase64String(image1.path)
  .then(base64String =>setBase641('data:image/jpeg;base64,'+base64String))
  .catch(err => console.log(err));
            });
        };
        const onPressHandler2 = () => {
            ImagePicker.openCamera({
              height: 130,
              width: 140,
                cropping: true,
            }).then(image2 => {
                getLocation2();
                setImage2(image2.path);
                const filePath = image2.path;
                setFileName2(filePath.replace(/^.*[\\\/]/, ''));
                console.log(filename2);
                setDate2(moment().format());
                  setImageMime2(image2.mime);
                ImgToBase64.getBase64String(image2.path)
  .then(base64String =>setBase642('data:image/jpeg;base64,'+base64String))
  .catch(err => console.log(err));
            });
        };
        const onPressHandler3 = () => {
            ImagePicker.openCamera({
              height: 130,
              width: 140,
                cropping: true,
            }).then(image3 => {
                getLocation3();
                setImage3(image3.path);
                const filePath = image3.path;
                setFileName3(filePath.replace(/^.*[\\\/]/, ''));
                console.log(filename3);
                setDate3(moment().format());
                  setImageMime3(image3.mime);
                ImgToBase64.getBase64String(image3.path)
  .then(base64String =>setBase643('data:image/jpeg;base64,'+base64String))
  .catch(err => console.log('erreur'));
            });
        };
        const onPressHandler4 = () => {
            ImagePicker.openCamera({
              height: 130,
              width: 140,
                cropping: true,
            }).then(image4 => {
                getLocation4();
                setImage4(image4.path);
                const filePath = image4.path;
                setFileName4(filePath.replace(/^.*[\\\/]/, ''));
                console.log(filename4);
                setDate4(moment().format());
                  setImageMime4(image4.mime);
                ImgToBase64.getBase64String(image4.path)
  .then(base64String =>setBase644('data:image/jpeg;base64,'+base64String))
  .catch(err => console.log(err));
            });
            console.log(Base644);
        };
        const [image1, setImage1] = useState(Image.resolveAssetSource(Image1).uri);
        const [image2, setImage2] = useState(Image.resolveAssetSource(Image2).uri);
        const [image3, setImage3] = useState(Image.resolveAssetSource(Image3).uri);
        const [image4, setImage4] = useState(Image.resolveAssetSource(Image4).uri);
        const [modalVisible1, setModalVisible1] = useState(false);
        const [modalVisible2, setModalVisible2] = useState(false);
        const [modalVisible3, setModalVisible3] = useState(false);
        const [modalVisible4, setModalVisible4] = useState(false);
        const { height, width } = useWindowDimensions();
        const Alert1 = () =>
        Alert.alert(
          'supprimer',
          'vous voulez vraiment supprimer cet image?',
          [
            {
              text: 'annuler',
              onPress: () =>  console.log('suppression annulée') ,
              style: 'cancel',
            },
            { text: 'oui', onPress: () => setImage1(Image.resolveAssetSource(Image1).uri)},
          ]);
          const Alert4 = () =>
          Alert.alert(
            'supprimer',
            'vous voulez vraiment supprimer cet image?',
            [
              {
                text: 'annuler',
                onPress: () =>  console.log('suppression annulée') ,
                style: 'cancel',
              },
              { text: 'oui', onPress: () => setImage4(Image.resolveAssetSource(Image4).uri) },
            ]);
            const Alert2 = () =>
            Alert.alert(
              'supprimer',
              'vous voulez vraiment supprimer cet image?',
              [
                {
                  text: 'annuler',
                  onPress: () =>  console.log('suppression annulée') ,
                  style: 'cancel',
                },
                { text: 'oui', onPress: () => setImage2(Image.resolveAssetSource(Image2).uri) },
              ]);
              const Alert3 = () =>
              Alert.alert(
                'supprimer',
                'vous voulez vraiment supprimer cet image?',
                [
                  {
                    text: 'annuler',
                    onPress: () =>  console.log('suppression annulée') ,
                    style: 'cancel',
                  },
                  { text: 'oui', onPress: () => setImage3(Image.resolveAssetSource(Image3).uri) },
                ]);
        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'center',
                flex: 1,
                fontFamily: 'Arial',
                backgroundColor: '#70d4b4',
                height:height,
                width:width,
             }}>
                <View style={styles.view1}>
                    <Text style={styles.text}>
                        Merci d'ajouter une photo de chaque coin de votre véhicule de numéro de police {route.params.paramKey} sous les angles énumérés ci-dessous
                    </Text>
                </View><View style={styles.borders}>
                    <View style={styles.views}>
                        <View style={styles.view2}>
                            <Text style={styles.textimg}>Avant conducteur</Text>
                            <View style={styles.view22}>
                                <ImageBackground
                                 source={
                                    {uri:image1}
                                  }
                                  resizeMode="contain"
                                     style={styles.image}>
                                <View style={styles.icons}>
                                    <TouchableOpacity  onPress={() => setModalVisible1(true)}>
                                        <Image source={require('./assets/zoom.png')}
                                            style={styles.icon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={Alert1}>
                                        <Image source={require('./assets/bin.png')}
                                            style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                                </ImageBackground>
                                <TouchableOpacity onPress={onPressHandler1}>
                                    <Text style={styles.button1}>AJOUTER UNE PHOTO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.textimg}>Passager avant</Text>
                            <View style={styles.view22}>
                                <ImageBackground
                                    source={{ uri:image2 }}
                                    resizeMode="contain" style={styles.image}>
                                    <View style={styles.icons}>
                                        <TouchableOpacity onPress={() => setModalVisible2(true)}>
                                            <Image source={require('./assets/zoom.png')}
                                                style={styles.icon} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={Alert2}>
                                            <Image source={require('./assets/bin.png')}
                                                style={styles.icon} />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                <TouchableOpacity onPress={onPressHandler2}>
                                    <Text style={styles.button1}>AJOUTER UNE PHOTO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.views}>
                        <View style={styles.view2}>
                            <Text style={styles.textimg}>Arrière du conducteur</Text>
                            <View style={styles.view22}>
                                <ImageBackground
                                    source={{uri: image3 }}
                                    resizeMode="contain" style={styles.image}>
                                    <View style={styles.icons}>
                                        <TouchableOpacity onPress={()=>setModalVisible3(true)}>
                                            <Image source={require('./assets/zoom.png')}
                                                style={styles.icon} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={Alert3}>
                                            <Image source={require('./assets/bin.png')}
                                                style={styles.icon} />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                <TouchableOpacity onPress={onPressHandler3}>
                                    <Text style={styles.button1}>AJOUTER UNE PHOTO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.textimg}>Passager arrière</Text>
                            <View style={styles.view22}>
                                <ImageBackground
                                    source={{ uri:image4 }}
                                    resizeMode="contain" style={styles.image}>
                                    <View style={styles.icons}>
                                        <TouchableOpacity onPress={()=>setModalVisible4(true)}>
                                            <Image source={require('./assets/zoom.png')}
                                                style={styles.icon} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={Alert4}>
                                            <Image source={require('./assets/bin.png')}
                                                style={styles.icon} />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                <TouchableOpacity onPress={onPressHandler4}>
                                    <Text style={styles.button1}>AJOUTER UNE PHOTO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.3}
                            style={styles.btnenvoi}
                            onPress={send}>
                            <Text style={styles.textbtn}>Envoyer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.model}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.modal}>
          <View>
          <Pressable
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Image source={require('./assets/close.png')}
                                            style={styles.iconclose} />
            </Pressable>
            <Image source={{ uri:image1 }}
            style={styles.imagemod}
            />
          </View>
        </View>
      </Modal>
    </View>
    <View style={styles.model}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.modal}>
          <View>
          <Pressable
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Image source={require('./assets/close.png')}
                                            style={styles.iconclose} />
            </Pressable>
            <Image source={{ uri:image2 }}
            style={styles.imagemod}
            />
          </View>
        </View>
      </Modal>
    </View>
    <View style={styles.model}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          setModalVisible3(!modalVisible3);
        }}
      >
        <View style={styles.modal}>
          <View>
          <Pressable
              onPress={() => setModalVisible3(!modalVisible3)}
            >
              <Image source={require('./assets/close.png')}
                                            style={styles.iconclose} />
            </Pressable>
            <Image source={{ uri:image3 }}
            style={styles.imagemod}
            />
          </View>
        </View>
      </Modal>
    </View>
    <View style={styles.model}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          setModalVisible4(!modalVisible4);
        }}
      >
        <View style={styles.modal}>
          <View>
          <Pressable
              onPress={() => setModalVisible4(!modalVisible4)}
            >
              <Image source={require('./assets/close.png')}
                                            style={styles.iconclose} />
            </Pressable>
            <Image source={{ uri:image4 }}
            style={styles.imagemod}
            />
          </View>
        </View>
      </Modal>
    </View>
    </View>
        );
    }
