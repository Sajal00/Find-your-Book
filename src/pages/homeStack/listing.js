import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Keyboard,
  StatusBar,
  ActivityIndicator,
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

const Listing = props => {
  api.setNavigation(props.navigation);

  const [searchValue, setSearchValue] = useState('all');
  const [bookData, setBookData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const navigation = useNavigation();

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    getData();
  }, [searchValue]);

  const getData = (isNewSearch = false) => {
    console.log('inside api call', searchValue);
    setLoading(true);
    const currentOffset = isNewSearch ? 0 : offset;
    api.bookApiHelper(
      {searchValue: searchValue, offset: currentOffset, limit: 50},
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
          setBookData(isNewSearch ? bookArray : [...bookData, ...bookArray]);
          setOffset(currentOffset + 50);
          if (bookArray.length < 50) {
            setHasMore(false);
          }

          setBookData(bookArray);
        }
        setLoading(false);
      },
    );
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

  // const headerComponent = () => {
  //   return (
  //     // <KeyboardAvoidingView style={listingStyle.keyboardAvoidingViewStyle} behavior="padding">
  //     <SafeAreaView style={listingStyle.safeAreaViewStyle}>
  //       <TouchableWithoutFeedback
  //         onPress={() => {
  //           Keyboard.dismiss();
  //         }}>
  //         {loading ? (
  //           <ActivityIndicator size={'large'} />
  //         ) : (
  //           <FlatList
  //             style={listingStyle.BookContentcontainer}
  //             contentContainerStyle={listingStyle.BoonContentStyle}
  //             numColumns={2}
  //             data={bookData}
  //             // keyExtractor={() => 'key'}
  //             renderItem={({item}) => (
  //               {loading?
  //                 (
  //                 <ActivityIndicator/>
  //               ):(
  //                 <BookCard
  //                 // _favouriteBooks={favouritebook}
  //                 data={item}
  //                 handleMyFevaurite={data => handleFevaurite(data)}
  //               />
  //               )}

  //             )}
  //             refreshing={false}
  //             onEndReached={() => {
  //               if (!loading && hasMore) {
  //                 getData();
  //               }
  //             }}
  //             onEndReachedThreshold={0.2}
  //           />
  //         )}
  //       </TouchableWithoutFeedback>
  //     </SafeAreaView>
  //     // </KeyboardAvoidingView>
  //   );
  // };
  const headerComponent = () => (
    <SafeAreaView style={listingStyle.safeAreaViewStyle}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            style={listingStyle.BookContentcontainer}
            contentContainerStyle={listingStyle.BoonContentStyle}
            numColumns={2}
            data={bookData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <BookCard data={item} handleMyFevaurite={handleFevaurite} />
            )}
            onEndReached={() => {
              if (!loading && hasMore) {
                getData();
              }
            }}
            onEndReachedThreshold={0.2}
          />
        )}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
  const refreshHandler = () => {
    getData();
    setHasMore(true);
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
        showSearchOIcon={true}
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
