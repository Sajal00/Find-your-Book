import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/styles/globalStyle';
import AppConfig from '../api/config';

const FavouriteCard = () => {
  const [favouritecountcounter, setFavouritecounter] = useState(null);
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name="heart" size={20} color={Color.red} />
      <Text>{favouritecountcounter}</Text>
    </View>
  );
};

export default FavouriteCard;
