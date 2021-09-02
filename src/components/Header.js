import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import colors from '../config/colors';

function Header({title, color = colors.textDark}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Icons
          name="chevron-back-sharp"
          size={24}
          color={color}
          style={[styles.icon, {borderColor: color}]}
        />
        <Text style={[styles.text, {color: color}]}>{title}</Text>
        <View />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    alignSelf: 'center',
    padding: 7,
    paddingTop: 9,
    borderWidth: 2,
    borderRadius: 18,
  },
  text: {
    marginTop: 5,
    fontSize: 20,
  },
});

export default Header;
