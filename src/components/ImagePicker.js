import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';

import colors from '../config/colors';

function ImagePicker({imageUri, onChangeImage, style}) {
  const pickImage = () => {
    try {
      const options = {
        storageOptions: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: true,
      };

      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          // console.log(response.assets[0].uri);
          onChangeImage(response.assets[0].uri);
        }
      });
    } catch (error) {
      alert('something went wrong!!');
    }
  };

  const handleOnPress = () => {
    !imageUri
      ? pickImage()
      : Alert.alert('Delete', 'Are you sure?', [
          {text: 'No'},
          {
            text: 'Yes',
            onPress: () => onChangeImage(null),
          },
        ]);
  };

  return (
    <>
      <TouchableHighlight
        onPress={() => handleOnPress()}
        style={[styles.imageContainer, style]}
        underlayColor="#F0F0F0">
        <>
          {imageUri ? (
            <Image
              source={{uri: imageUri}}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <EvilIcons name="image" size={32} color={colors.textLight} />
          )}
        </>
      </TouchableHighlight>

      {imageUri && (
        <TouchableOpacity
          onPress={() => handleOnPress()}
          style={{
            backgroundColor: colors.textDark,
            position: 'absolute',
            top: -0,
            right: -0,
            borderRadius: 14,
            padding: 3,
            borderWidth: 3,
            borderColor: colors.background,
          }}>
          <AntDesign name="close" size={14} color="white" />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.textLight,
    width: 72,
    height: 72,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImagePicker;
