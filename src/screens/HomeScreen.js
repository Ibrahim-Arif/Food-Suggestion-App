import React, {useState} from 'react';
import {View, StyleSheet, Image, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import Screen from '../components/Screen';
import MapStyles from '../config/MapStyles';
import SuggestButton from '../components/SuggestButton';

function HomeScreen({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(false);

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <Screen style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={MapStyles}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
      />
      <View style={styles.topContainer}>
        <MaterialCommunityIcons name="menu" size={24} color="#fff" />

        <Image
          source={require('../screens/tom.jpg')}
          style={styles.userImage}
          resizeMode="cover"
        />
      </View>

      <SuggestButton
        style={{position: 'absolute', bottom: 15, right: 0}}
        onPress={() => setIsModalVisible(true)}
      />

      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0}
        onBackdropPress={toggleModal}
        swipeDirection={['down']}
        onSwipeComplete={toggleModal}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <SuggestButton
          style={{alignSelf: 'flex-end', bottom: 5}}
          onPress={() => {
            toggleModal();
            navigation.navigate('Suggestion');
          }}
        />

        <View style={styles.modalContainer}>
          <View style={styles.modalButton} />
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalButton: {
    height: 5,
    width: 45,
    backgroundColor: colors.textDark,
    borderRadius: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  modalContainer: {
    backgroundColor: colors.backgroundLight,
    flex: 0.6,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: Platform.OS == 'android' ? 0 : 15,
  },
});

export default HomeScreen;
