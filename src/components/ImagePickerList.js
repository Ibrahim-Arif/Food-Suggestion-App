import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';

import ImagePicker from './ImagePicker';

function ImagePickerList({imageUris, onDelete, onAdd}) {
  const flatlist = useRef();

  return (
    <View>
      <FlatList
        data={imageUris}
        keyExtractor={item => item}
        ref={flatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => flatlist.current.scrollToEnd()}
        renderItem={({item}) => (
          <ImagePicker
            imageUri={item}
            onChangeImage={() => onDelete(item)}
            style={{margin: 5}}
          />
        )}
        ListHeaderComponent={
          <ImagePicker
            onChangeImage={item => onAdd(item)}
            style={{margin: 5}}
          />
        }
      />
    </View>
  );
}

export default ImagePickerList;
