import React from 'react';
import { Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';

var myBackground = require('./assets/landing.jpg');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={myBackground} style={styles.myBackground}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block={true}
              tyle={styles.buttonStyle}
              onPress={()=>{}}>
                <Text style={styles.buttonText}>Start searching</Text>
              </Button>
          </View> 
        </ImageBackground>
      </View> 
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myBackground: {width: '100%', height: '100%'},
  titleStyle: {
    fontSize: 30, 
    color: 'blue',
    alignItems: 'center'

  },
  buttonStyle: {margin: 10 },
  buttonText: {color: 'white'}
};