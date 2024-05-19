import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import bookCardStyle from '../assets/styles/components/bookCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/styles/globalStyle';
import AppConfig from '../api/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = AppConfig.apiLoc;

const bookCard = ({data, handleMyFevaurite}) => {
  const [colorState, setColorState] = React.useState(false);

  const handleFevaurite = data => {
    setColorState(!colorState);
    handleMyFevaurite(data);
  };

  useEffect(() => {
    getFavouritebooks();
  }, []);
  // const getFavouritebooks = async () => {
  //   const mydata = await AsyncStorage.getItem('favourite_data');
  //   const favoriteBooks = storedData ? JSON.parse(storedData) : [];
  //   favoriteBooks?.map(item => {
  //     console.log('favour item', item);
  //     console.log('mycurrentdata', data);
  //     item == data ? setColorState(true) : setColorState(false);
  //   });
  // };
  const getFavouritebooks = async () => {
    try {
      const storedData = await AsyncStorage.getItem('favorite_data');
      const favoriteBooks = storedData ? JSON.parse(storedData) : [];

      if (favoriteBooks.some(item => item.id === data.id)) {
        setColorState(true);
      }
    } catch (error) {
      console.error('Error fetching favorite books from storage:', error);
    }
  };
  return (
    <View style={bookCardStyle.mainContainer}>
      <Image
        source={{
          uri: 'https://ia804703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_70.zip&file=0012706822-L.jpg',
          // uri: `https://ia804703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_70.zip&file=${data?.CoverUri}-L.jpg`,
        }}
        // source={{uri: `${url}b/id/${data?.CoverUri}-L.jpg`}}
        style={bookCardStyle.Bookimage}
      />
      <Text style={bookCardStyle.text}>Title: {data?.Title}</Text>
      <Text style={bookCardStyle.text}>Publish Year: {data?.PublishYear}</Text>
      <TouchableOpacity
        onPress={() => handleFevaurite(data)}
        style={bookCardStyle.searchIconContainer}>
        <Icon
          name="heart"
          size={20}
          color={colorState ? Color.red : Color.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default bookCard;
