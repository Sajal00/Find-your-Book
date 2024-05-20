import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import headerStyles from '../assets/styles/components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/styles/globalStyle';

const Header = ({
  setMySearchValue,
  mySearchValue,
  props,
  navigation,
  showSearchOIcon,
}) => {
  const [searchArea, setSearchArea] = useState(false);
  // const [favouritecount, setFavouritecount] = useState(1);
  // const [colorState, setColorState] = React.useState(false);

  const handleSearch = () => {
    setSearchArea(!searchArea);
  };
  const handleChange = e => {
    console.log('e', e);
    setMySearchValue(e);
  };

  const handleFevaurite = () => {
    navigation.navigate('favouritelisting');
  };
  const handleBack = () => {
    navigation.navigate('listing');
  };
  return (
    <>
      <View style={[headerStyles.header, headerStyles.headerFlexBox]}>
        {showSearchOIcon ? (
          <Text style={headerStyles.text}>Find Your Book</Text>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => handleBack()}
              style={headerStyles.backIconContainer}>
              <Icon name="arrow-left" size={20} color={Color.black} />
            </TouchableOpacity>
            <Text style={[headerStyles.text, {position: 'absolute', left: 50}]}>
              Favourite
            </Text>
          </>
        )}

        <TouchableOpacity
          onPress={() => handleFevaurite()}
          style={headerStyles.heartIconContainer}>
          <Icon name="heart" size={20} color={Color.red} />
        </TouchableOpacity>

        {showSearchOIcon && (
          <TouchableOpacity
            onPress={() => handleSearch()}
            style={headerStyles.searchIconContainer}>
            <Icon name="search" size={20} color={Color.black} />
          </TouchableOpacity>
        )}
      </View>
      {searchArea && (
        <View style={headerStyles.searchContainer}>
          <TextInput
            style={headerStyles.input}
            onChangeText={e => handleChange(e)}
            value={mySearchValue}
            placeholder="search"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      )}
    </>
  );
};

export default Header;
