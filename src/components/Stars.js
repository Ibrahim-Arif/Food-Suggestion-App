import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';

function Stars({rating}) {
  const handleRating = () => {
    const ratingIcons = [];
    for (let i = 1; i <= rating; i++)
      ratingIcons.push(
        <AntDesign
          name="star"
          size={12}
          color={colors.gold}
          key={i}
          style={{marginLeft: 5}}
        />,
      );
    return ratingIcons;
  };

  return (
    <View style={styles.container}>
      <Text style={{color: colors.gold, fontWeight: 'bold'}}>
        {rating.toFixed(1)}
      </Text>
      {handleRating()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Stars;
