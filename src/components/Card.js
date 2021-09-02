import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import colors from '../config/colors';
import Seperator from './Seperator';
import Stars from './Stars';

import Title from './Title';

function Card({item, forRestuarant = true}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Title title={item.comment} fontSize={20} />
          {forRestuarant ? (
            <Text style={{color: colors.purple, fontSize: 16}}>
              {`${item.distance} Away`}
            </Text>
          ) : (
            <Text style={{color: colors.textDark}}>{item.timeStamp}</Text>
          )}
        </View>

        <View style={styles.rowContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Stars rating={item.rating} />
            {forRestuarant && (
              <Text
                style={{
                  color: colors.textDark,
                  marginLeft: 10,
                }}>{`(${item.totalReviews})`}</Text>
            )}
          </View>

          {!forRestuarant && (
            <TouchableOpacity>
              <Text
                style={{
                  color: colors.gold,
                  textDecorationLine: 'underline',
                }}>
                Click to give a rating
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{marginVertical: 10}}>
          <FlatList
            data={item.images}
            keyExtractor={item => item.link}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Image
                // source={{uri: item.link}}
                source={require('../screens/3.png')}
                resizeMode="cover"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
            )}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <View style={{flex: 1.15}}>
            <FlatList
              data={item.tags}
              keyExtractor={item => item.title}
              numColumns={4}
              columnWrapperStyle={{flexWrap: 'wrap'}}
              renderItem={({item}) => (
                <View style={styles.tagButton}>
                  <Text style={{color: colors.textLight, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                </View>
              )}
            />
          </View>

          {!forRestuarant && (
            <View
              style={{
                flex: 0.85,
                flexDirection: 'row',
              }}>
              <Image
                // source={{uri: item.userProfile}}
                source={require('../screens/4.jpg')}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 17.5,
                  marginRight: 7.5,
                }}
                resizeMode="cover"
              />
              <Title title={item.username} fontSize={16} />
            </View>
          )}
        </View>
      </View>
      <Seperator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    marginVertical: 7.5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
  tagButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderColor: colors.textLight,
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default Card;
