import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../config/colors';

function Title({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
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
    fontSize: 18,
  },
});

export default Title;
