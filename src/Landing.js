import React from 'react';
import {View,Text, ImageBackground } from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/landing.jpg');
 
class Landing extends React.Component {
    render() {
        return ( 
            <View>
                <ImageBackground source={myBackground} style={styles.myBackground}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
                        <Button
                        block={true}
                        tyle={styles.buttonStyle}
                        onPress={()=> this.props.switchScreeen('search') }>
                            <Text style={styles.buttonText}>Start searching</Text>
                        </Button>
                    </View> 
                </ImageBackground>
            </View>
        )
    } 
}


const styles = {
     
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

export default Landing;