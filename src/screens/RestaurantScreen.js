import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  Text,
} from 'react-native';

import Header from '../components/Header';

import Screen from '../components/Screen';
import Stars from '../components/Stars';
import colors from '../config/colors';

function RestaurantScreen({}) {
  // item object data should be pass via route.params.
  const item = {
    coverImgUri:
      'https://dailytimes.com.pk/assets/uploads/2018/11/21/howcuttingdo.jpg',
    profileImgUri: 'https://bit.ly/3gXglUt',
    name: 'Mc Donalds',
    description: 'Drinks, fries and other fast food',
    address: '6 Yukon Drive Raeford, NC 25673',
    avgRating: 4,
    totalReviews: 2345,
    distance: '38 km',
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground
          source={require('./1.jpg')}
          // source={{uri: item.coverImgUri}}
          resizeMode="cover"
          style={styles.coverImg}>
          <View
            style={{
              paddingTop: StatusBar.currentHeight,
              paddingHorizontal: 15,
            }}>
            <Header title="Restaurant Details" color="#fff" />
            <Image
              // source={{uri: item.profileImgUri}}
              source={require('./2.jpg')}
              resizeMode="cover"
              style={{
                width: 100,
                height: 100,
                borderRadius: 25,
                top: 30,
              }}
            />
          </View>
        </ImageBackground>

        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Stars rating={item.avgRating} />
              <Text
                style={{
                  color: colors.textDark,
                  marginLeft: 10,
                }}>{`(${item.totalReviews})`}</Text>
            </View>

            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              {item.name}
            </Text>
            <Text style={{color: colors.textDark}}>{item.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3951',
  },
  coverImg: {
    width: '100%',
    height: '75%',
  },
  topContainer: {
    height: Dimensions.get('screen').height * 0.35,
  },
});

export default RestaurantScreen;
