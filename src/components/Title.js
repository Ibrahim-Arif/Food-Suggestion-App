import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../config/colors';

function Title({title, fontSize = 18}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: fontSize}]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginBottom: 10,
  },
  text: {
    color: colors.textLight,
    fontWeight: 'bold',
  },
});

export default Title;
