import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Keyboard,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import DefaultHeader from '../../components/header';
import {Color} from '../../assets/styles/globalStyle';
import listingStyle from '../../assets/styles/pages/listing';
import Toast from 'react-native-simple-toast';
import BookCard from '../../components/bookCard';
import {useNavigation} from '@react-navigation/native';

const api = require('../../api/index');

const Favourite = props => {
  api.setNavigation(props.navigation);

  const [searchValue, setSearchValue] = useState('');
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getData();
  // }, [searchValue]);

  const getData = async () => {
    const storedData = await AsyncStorage.getItem('favorite_data');
    const books = storedData ? JSON.parse(storedData) : [];
    setFavoriteBooks(books);
  };
  const handleFevaurite = async data => {
    console.log('id at HomeNavigator', data);
    let updatedFavorites = [...favoriteBooks];

    if (updatedFavorites.includes(data)) {
      updatedFavorites = updatedFavorites.filter(item => item !== data);
    } else {
      updatedFavorites.push(data);
    }

    setFavoriteBooks(updatedFavorites);
    await AsyncStorage.setItem(
      'favorite_data',
      JSON.stringify(updatedFavorites),
    );
  };

  const headerComponent = () => {
    return (
      // <KeyboardAvoidingView style={listingStyle.keyboardAvoidingViewStyle} behavior="padding">
      <SafeAreaView style={listingStyle.safeAreaViewStyle}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          {favoriteBooks.length > 0 ? (
            <FlatList
              style={listingStyle.BookContentcontainer}
              contentContainerStyle={listingStyle.BoonContentStyle}
              numColumns={2}
              data={favoriteBooks}
              // keyExtractor={() => 'key'}
              renderItem={({item}) => (
                <BookCard
                  // _favouriteBooks={favouritebook}
                  data={item}
                  handleMyFevaurite={data => handleFevaurite(data)}
                />
              )}
              refreshing={false}
            />
          ) : (
            <View style={listingStyle.noBooksContainer}>
              <Text style={listingStyle.noBooksText}>No book found</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
      </SafeAreaView>
      // </KeyboardAvoidingView>
    );
  };
  const refreshHandler = () => {
    //reset all
  };

  const handleSearchItem = item => {
    console.log('item at home', item);
    setSearchValue(item);
  };
  return (
    <View style={listingStyle.mainContainer}>
      <StatusBar
        backgroundColor={Color.black}
        translucent={false}
        barStyle="light-content"
      />
      <DefaultHeader
        setMySearchValue={item => handleSearchItem(item)}
        mySearchValue={searchValue}
        navigation={navigation}
        showSearchOIcon={false}
      />
      <FlatList
        style={listingStyle.container}
        data={[]}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={headerComponent()}
        onRefresh={() => refreshHandler()}
        refreshing={false}></FlatList>
    </View>
  );
};

export default Favourite;
