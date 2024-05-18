// this contains all the API calls needed
import AppConfig from './config';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
const url = AppConfig.apiLoc;
var apiCalls = {};

apiCalls.bookApiHelper = (param_data, methodType, apiName, cb) => {
  let sub_url = '';
  let path = '';

  NetInfo.fetch().then(state => {
    // console.log("my net Info state", state);
    if (state.isConnected) {
      switch (apiName) {
        case 'search_book':
          sub_url = `search.json?q=${param_data.searchValue}&limit=${param_data.limit}&offset=${param_data.offset}`;
          path = url + sub_url;
          break;
      }
      // if sub url not set the exit
      if (path == '') {
        cb('API Path Not Found!', null);
        return;
      }

      if (methodType == 'GET') {
        fetch(path, {
          method: methodType,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.status_code === 401) {
              // console.log("api sent 401");
            } else {
              // console.log('here in android.js');
              cb(null, responseJson);
            }
          })
          .catch(error => {
            cb(error);
          });
      } else if (methodType == 'POST') {
        fetch(path, {
          method: methodType,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(param_data),
        })
          .then(response => response.json())
          .then(responseJson => {
            cb(null, responseJson);

            if (responseJson.status === 401) {
              // console.log("api sent 401");
            } else {
              cb(null, responseJson);
              // console.log("api success block", responseJson);
            }
          })
          .catch(error => {
            cb(error);
          });
      }
    } else {
      cb('offline');
      Toast.showWithGravity(
        'You are Offline. Please check your connection.',
        Toast.LONG,
        Toast.CENTER,
      );
    }
  });
};

//=======================================
apiCalls.setNavigation = props => {
  NavigationObject = props;
};

module.exports = apiCalls;
