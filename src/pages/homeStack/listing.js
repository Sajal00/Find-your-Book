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

const api = require('../../api/index');

const Listing = props => {
  api.setNavigation(props.navigation);

  const [searchValue, setSearchValue] = useState('all');
  const [bookData, setBookData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [searchValue]);

  const getData = () => {
    console.log('inside api call', searchValue);
    api.bookApiHelper(
      {searchValue: searchValue, offset: 0, limit: 10},
      'GET',
      'search_book',
      async (e, r) => {
        if (e) {
          console.log('get Book error!' + e);
        } else {
          console.log('Get Book result: ', r);

          let bookArray = [];
          r?.docs.map(item => {
            let bookObj = {
              Title: item?.title,
              PublishYear: item?.first_publish_year,
              CoverUri: item?.cover_i,
              id: item?.key,
            };
            bookArray.push(bookObj);
          });

          console.log('my book array', bookArray);
          setBookData(bookArray);
        }
      },
    );
  };
  // const handleFevaurite = async data => {
  //   console.log('id at HomeNavigator', data);
  //   const favouritebook = [];
  //   if (favouritebook.length == 0) {
  //     favouritebook.push(data);
  //   } else {
  //     favouritebook.map(item => {
  //       item == data ? favouritebook.remove(data) : favouritebook.push(data);
  //     });
  //   }

  //   await AsyncStorage.setItem('favourite_data', favouritebook);
  // };
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
          <FlatList
            style={listingStyle.BookContentcontainer}
            contentContainerStyle={listingStyle.BoonContentStyle}
            numColumns={2}
            data={bookData}
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

export default Listing;
