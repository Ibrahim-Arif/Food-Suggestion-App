import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from '../components/Header';
import ImagePickerList from '../components/ImagePickerList';
import Screen from '../components/Screen';
import Title from '../components/Title';
import colors from '../config/colors';

const TagButton = ({title, selectedTagsList, setSelectedTagsList}) => {
  const [isSelected, setIsSelected] = useState(false);
  const styles = {
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: isSelected ? '#5F729D' : colors.backgroundLight,
    borderRadius: 15,
    borderColor: colors.textLight,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (isSelected)
          setSelectedTagsList(selectedTagsList.filter(i => i !== title));
        else setSelectedTagsList([...selectedTagsList, title]);

        setIsSelected(!isSelected);
      }}>
      <View style={styles}>
        {isSelected && (
          <Ionicons
            name="md-checkmark-sharp"
            size={24}
            color={colors.textLight}
            style={{marginRight: 5}}
          />
        )}
        <Text style={{color: colors.textLight, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function SuggestionScreen({}) {
  const [imageUris, setImageUris] = useState([]);
  const [search, setSearch] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const tagsList = [
    {
      title: 'High Protien',
    },
    {
      title: 'High Fiber',
    },
    {
      title: 'Low Carbs',
    },
    {
      title: 'Low Fat',
    },
    {
      title: 'Keto',
    },
    {
      title: 'Balanced',
    },
  ];

  const handleCreate = () => {
    const data = {
      imageUris,
      search,
      description,
      selectedTags,
    };

    console.log(data);
    alert('Button Pressed, check console');
  };

  return (
    <Screen style={styles.container}>
      <Header title="Suggest a Food" />

      <View style={{height: 10}} />
      <Title title="Add Photos" />

      <ImagePickerList
        imageUris={imageUris}
        onAdd={uri => setImageUris([...imageUris, uri])}
        onDelete={uri => setImageUris(imageUris.filter(i => i !== uri))}
      />

      <Title title="Select a Restuarant" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.backgroundLight,
          borderRadius: 15,
        }}>
        <EvilIcons
          name="search"
          size={30}
          color={colors.textLight}
          style={{marginHorizontal: 10}}
        />
        <TextInput
          style={{flex: 1, color: colors.textLight, fontSize: 16}}
          onChangeText={setSearch}
          value={search}
          placeholder="Search a Restuarant"
          placeholderTextColor={colors.textLight}
        />
      </View>

      <View style={{height: 5}} />
      <Title title="Add Description" />
      <View style={styles.desc}>
        <TextInput
          style={{color: colors.textLight, fontSize: 16}}
          onChangeText={setDescription}
          value={description}
          placeholder="Write description here"
          placeholderTextColor={colors.textLight}
        />
      </View>

      <View style={{height: 10}} />
      <Title title="Add Tags" />
      <View>
        <FlatList
          data={tagsList}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{flexWrap: 'wrap'}}
          numColumns={3}
          ListFooterComponent={
            <View style={styles.suggestButton}>
              <Entypo name="plus" size={24} color={colors.textLight} />
              <Text style={{color: colors.textLight, fontWeight: 'bold'}}>
                Suggest Tag
              </Text>
            </View>
          }
          renderItem={({item}) => (
            <TagButton
              title={item.title}
              selectedTagsList={selectedTags}
              setSelectedTagsList={setSelectedTags}
            />
          )}
        />
      </View>

      <Button
        mode="contained"
        onPress={handleCreate}
        color={colors.purple}
        style={{
          marginTop: 20,
          borderRadius: 15,
          height: 40,
          justifyContent: 'center',
        }}>
        {'Create & Review'}
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
  },
  desc: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 15,
    height: 100,
    paddingLeft: 25,
    paddingRight: 10,
    paddingVertical: 5,
  },
  suggestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.textLight,
    borderStyle: 'dashed',
    height: 40,
    borderRadius: 15,
    width: 150,
    margin: 5,
    paddingHorizontal: 10,
  },
});

export default SuggestionScreen;
