import React from 'react';
import { View, Platform } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component {

  state = {
    currentScreen: 'landing'
  }

  switchScreeen = (currentScreen) => {
    this.setState({currentScreen});
  }
  renderScreen = () => {
    if (this.state.currentScreen === 'landing') {
      return (
        <Landing switchScreeen={this.switchScreeen} />
      )
    }
    else if (this.state.currentScreen === 'search') {
      return (
        <Search />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View> 
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
  }
};