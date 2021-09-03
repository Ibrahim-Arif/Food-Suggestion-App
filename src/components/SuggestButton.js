import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import colors from '../config/colors';

function SuggestButton({onPress}) {
  return (
    <View style={{alignSelf: 'flex-end', bottom: 5}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          right: 25,
        }}>
        <View
          style={{
            backgroundColor: colors.purple,
            padding: 15,
            borderRadius: 36,
          }}>
          <SimpleLineIcons name="cup" size={26} color="white" />
        </View>
        <Text style={{color: 'white', marginTop: 5}}>Suggest a Food</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SuggestButton;
