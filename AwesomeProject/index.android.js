/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

// 1.Hello World

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }

  render() {
    let pic = {
      uri: 'http://i.dailymail.co.uk/i/pix/2013/01/06/article-2257907-1436A316000005DC-755_6' +
          '34x374.jpg'
    };
    return (<Image source={pic} style={{
      width: 193,
      height: 110
    }}/>);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
// 2.props属性

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{
        alignSelf: 'center'
      }}>
        <Greeting name='Rexxar'/>
        <Greeting name='Jaina'/>
        <Greeting name='Vallera'/>
      </View>
    );
  }

}

// AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
// 3.state状态
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    // 每500毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
    }, 500);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText
      ? this.props.text
      : ' ';

    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink'/>
        <Blink text='Yes blinking is so greate'/>
        <Blink text='Why did they ever take this out of HTML'/>
        <Blink text='Look at me look at me look at me'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);