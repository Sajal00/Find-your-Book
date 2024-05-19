import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import headerStyles from '../assets/styles/components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/styles/globalStyle';

const Header = ({setMySearchValue, mySearchValue}) => {
  const [searchArea, setSearchArea] = useState(false);

  const handleSearch = () => {
    setSearchArea(!searchArea);
  };
  const handleChange = e => {
    console.log('e', e);
    setMySearchValue(e);
  };

  return (
    <>
      <View style={[headerStyles.header, headerStyles.headerFlexBox]}>
        <Text style={headerStyles.text}>Find Your Book</Text>
        <TouchableOpacity
          onPress={() => handleSearch()}
          style={headerStyles.searchIconContainer}>
          <Icon name="search" size={20} color={Color.black} />
        </TouchableOpacity>
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
