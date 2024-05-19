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

  handleFevaurite = id => {
    console.log('id at HomeNavigator', id);
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
                data={item}
                handleMyFevaurite={id => handleFevaurite(id)}
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
