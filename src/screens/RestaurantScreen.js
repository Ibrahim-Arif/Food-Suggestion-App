import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from '../components/Header';
import Seperator from '../components/Seperator';
import Title from '../components/Title';
import Stars from '../components/Stars';
import colors from '../config/colors';
import Card from '../components/Card';

function RestaurantScreen({}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground
          source={{uri: item.coverImgUri}}
          resizeMode="cover"
          style={styles.coverImg}>
          <View
            style={{
              paddingTop: StatusBar.currentHeight,
              paddingHorizontal: 15,
            }}>
            <Header title="Restaurant Details" color="#fff" />
            <Image
              source={{uri: item.profileImgUri}}
              resizeMode="cover"
              style={{
                width: 100,
                height: 100,
                borderRadius: 25,
                top: Platform.OS == 'android' ? 25 : 10,
              }}
            />
          </View>
        </ImageBackground>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
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
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              bottom: 25,
              left: 20,
            }}>
            <View
              style={{
                padding: 10,
                backgroundColor: colors.purple,
                borderRadius: 100,
              }}>
              <Entypo name="location-pin" size={34} color="#fff" />
            </View>
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
              }}>
              {`${item.distance} Away`}
            </Text>
          </View>
        </View>
      </View>

      <Seperator />

      <FlatList
        data={suggestionsList}
        ListHeaderComponent={
          <View style={{marginLeft: 15, marginBottom: -10}}>
            <Title title="Suggested Foods" fontSize={16} />
          </View>
        }
        renderItem={({item}) => <Card item={item} forRestuarant={false} />}
      />
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
    paddingTop: Platform.OS == 'android' ? 10 : 40,
  },
  topContainer: {
    height: Dimensions.get('screen').height * 0.35,
    marginBottom: 20,
  },
});

export default RestaurantScreen;

// item object data should be pass via route.params.
const item = {
  coverImgUri:
    'https://www.eatthis.com/wp-content/uploads/sites/4/2020/10/fast-food.jpg?quality=82&strip=1&resize=640%2C360',
  profileImgUri: 'https://bit.ly/3gXglUt',
  name: 'Mc Donalds',
  description: 'Drinks, fries and other fast food',
  address: '6 Yukon Drive Raeford, NC 25673',
  avgRating: 4,
  totalReviews: 2345,
  distance: '38 km',
};

const suggestionsList = [
  {
    comment: 'Fruit salad, taste good!',
    timeStamp: '4 months ago',
    rating: 4,
    distance: '38 km',
    username: 'Stephan Cook',
    totalReviews: 2045,
    userProfile:
      'https://media.self.com/photos/5f490e4e4a75ee30a626683e/4:3/w_2560%2Cc_limit/woman_food_donut.jpeg',
    images: [
      {
        link: 'https://i.ndtvimg.com/i/2017-10/thali_650x400_61508157304.jpg',
      },
      {
        link: 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg',
      },
      {
        link: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
      },
      {
        link: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/10/foodJointPainRelief-142336977-770x533-1.jpg',
      },
      {
        link: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/tips_for_new_and_current_vegetarians_slideshow/1800ss_getty_rf_food_on_table.jpg?resize=750px:*',
      },
    ],
    tags: [
      {title: 'High Protien'},
      {title: 'High Fiber'},
      {title: 'Low Carbs'},
    ],
  },
  {
    comment: 'Wow this was so delicious!!',
    timeStamp: '1 week ago',
    rating: 5,
    distance: '12 km',
    username: 'James Bond',
    totalReviews: 786,
    userProfile:
      'https://media.self.com/photos/5f490e4e4a75ee30a626683e/4:3/w_2560%2Cc_limit/woman_food_donut.jpeg',
    images: [
      {
        link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/instant-oatmeal-cranberries-1614955162.jpg?crop=0.526xw:1.00xh;0.169xw,0&resize=640:*',
      },
      {
        link: 'https://www.diana-food.com/fileadmin/diana_food/5_Landing_pages/Culinary_Creations/Diana_Food_Culinary_Creations_3col_424x424.jpg',
      },
      {
        link: 'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg',
      },
      {
        link: 'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      },
    ],
    tags: [{title: 'Balanced'}, {title: 'High Protien'}],
  },
  {
    comment: 'Wonderful experience..',
    timeStamp: '5 week ago',
    rating: 5,
    username: 'James Bond',
    userProfile:
      'https://media.self.com/photos/5f490e4e4a75ee30a626683e/4:3/w_2560%2Cc_limit/woman_food_donut.jpeg',
    images: [
      {
        link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/instant-oatmeal-cranberries-1614955162.jpg?crop=0.526xw:1.00xh;0.169xw,0&resize=640:*',
      },
      {
        link: 'https://www.diana-food.com/fileadmin/diana_food/5_Landing_pages/Culinary_Creations/Diana_Food_Culinary_Creations_3col_424x424.jpg',
      },
      {
        link: 'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg',
      },
      {
        link: 'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      },
    ],
    tags: [{title: 'Balanced'}, {title: 'High Protien'}],
  },
];
