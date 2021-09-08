import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Modalize} from 'react-native-modalize';

import colors from '../config/colors';
import Screen from '../components/Screen';
import Title from '../components/Title';
import MapStyles from '../config/MapStyles';
import SuggestButton from '../components/SuggestButton';
import Card from '../components/Card';

function HomeScreen({navigation}) {
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
        <MaterialCommunityIcons
          name="menu"
          size={24}
          color="#fff"
          onPress={() => alert('Menu icon pressed')}
        />

        <Image
          source={require('../screens/tom.jpg')}
          style={styles.userImage}
          resizeMode="cover"
        />
      </View>

      <SuggestButton onPress={() => navigation.navigate('Suggestion')} />

      <Modalize
        alwaysOpen={60}
        // snapPoint={350}
        modalStyle={styles.modalContainer}
        handlePosition="inside"
        HeaderComponent={
          <View style={styles.modalIcons}>
            <Title title="Food Suggested" fontSize={20} />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                name="md-filter-outline"
                size={26}
                color="#fff"
                style={{marginRight: 10}}
                onPress={() => alert('Filter 1 pressed')}
              />
              <MaterialCommunityIcons
                name="filter-outline"
                size={26}
                color="#fff"
                onPress={() => alert('Filter 2 pressed')}
              />
            </View>
          </View>
        }
        flatListProps={{
          data: suggestionsList,
          renderItem: ({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
              <Card item={item} forRestuarant={true} />
            </TouchableOpacity>
          ),
        }}
      />
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.backgroundLight,
    overflow: 'hidden',
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
  modalIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 15,
  },
});

export default HomeScreen;

const suggestionsList = [
  {
    comment: 'Barbeque Nation',
    rating: 4,
    distance: '38 km',
    totalReviews: 2045,
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
    ],
    tags: [
      {title: 'High Protien'},
      {title: 'High Fiber'},
      {title: 'Low Carbs'},
    ],
  },
  {
    comment: 'The Eating House',
    rating: 5,
    distance: '12 km',
    totalReviews: 786,
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
    comment: 'Barbeque Nation',
    rating: 4,
    distance: '38 km',
    totalReviews: 2045,
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
    ],
    tags: [
      {title: 'High Protien'},
      {title: 'High Fiber'},
      {title: 'Low Carbs'},
    ],
  },
  {
    comment: 'The Eating House',
    rating: 5,
    distance: '12 km',
    totalReviews: 786,
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
    comment: 'Barbeque Nation',
    rating: 4,
    distance: '38 km',
    totalReviews: 2045,
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
    ],
    tags: [
      {title: 'High Protien'},
      {title: 'High Fiber'},
      {title: 'Low Carbs'},
    ],
  },
  {
    comment: 'The Eating House',
    rating: 5,
    distance: '12 km',
    totalReviews: 786,
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
    comment: 'Barbeque Nation',
    rating: 4,
    distance: '38 km',
    totalReviews: 2045,
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
    ],
    tags: [
      {title: 'High Protien'},
      {title: 'High Fiber'},
      {title: 'Low Carbs'},
    ],
  },
  {
    comment: 'The Eating House',
    rating: 5,
    distance: '12 km',
    totalReviews: 786,
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
