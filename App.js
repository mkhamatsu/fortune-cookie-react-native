import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import CookieButton from './src/components/CookieButton';
import CookieImage from './src/components/CookieImage';
import CookiePhrases from './src/components/CookiePhrases';
import Phrases from './src/mock/phrases';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phraseText: '',
      img: require('./src/imgs/cookie.png')
    };

    this.breakCookie = this.breakCookie.bind(this);
    this.phrases = Phrases;

  }

  breakCookie(props) {
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    this.setState({
      phraseText: this.phrases[randomNumber],
      img: require('./src/imgs/open-cookie.png')
    })
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <CookieImage image={this.state.img} />
        <CookiePhrases value={this.state.phraseText} />
        <CookieButton function={this.breakCookie} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
