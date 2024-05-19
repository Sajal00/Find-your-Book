import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import bookCardStyle from '../assets/styles/components/bookCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/styles/globalStyle';
import AppConfig from '../api/config';

const url = AppConfig.apiLoc;

const bookCard = ({data, handleMyFevaurite}) => {
  const [colorState, setColorState] = React.useState(false);
  const handleFevaurite = id => {
    setColorState(!colorState);
    handleMyFevaurite(id);
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
        onPress={() => handleFevaurite(data?.id)}
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
