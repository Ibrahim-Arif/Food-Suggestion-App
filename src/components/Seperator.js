import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';

function Seperator({style}) {
  return <View style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textDark,
    height: 0.5,
    width: '100%',
  },
});

export default Seperator;
