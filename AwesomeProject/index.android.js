/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

/* 1.Hello World */

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

/* 2.props属性 */

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

// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);

/* 4.style */

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={stylesSheet.red}>just red</Text>
        <Text style={stylesSheet.bigblue}>just bigblue</Text>
        <Text style={[stylesSheet.bigblue, stylesSheet.red]}>bigblue, then red</Text>
        <Text style={[stylesSheet.red, stylesSheet.bigblue]}>red, then bigblue</Text>
      </View>

    );
  }
}

const stylesSheet = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});

// AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);

/* width and height */

class FixedDimensionBasics extends Component {
  render() {
    return (
      <View>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }}/>

        <View
          style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue'
        }}/>

        <View
          style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue'
        }}/>
      </View>
    );
  }
}

// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionBasics);

class FixedDimensionBasics2 extends Component {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View
          style={{
          flex: 1,
          backgroundColor: 'powderblue'
        }}/>

        <View
          style={{
          flex: 2,
          backgroundColor: 'skyblue'
        }}/>

        <View
          style={{
          flex: 3,
          backgroundColor: 'steelblue'
        }}/>
      </View>
    );
  }
}

// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionBasics2);

/* Flex direction 决定布局的主轴 */
class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row-reverse'
      }}>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }}/>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'skyblue'
        }}/>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'steelblue'
        }}/>
      </View>
    );
  }
};

// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

/* justifyContent  决定其子元素沿着主轴的排列方式 */

class JustifyContentBasics extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }}/>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'skyblue'
        }}/>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'steelblue'
        }}/>
      </View>
    );
  }
};

// AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);

/* alignItems 决定其子元素沿着次轴(与主轴垂直的轴，比如若主轴为row，则次轴为column)的排列方式 */

class AlignItemsBasics extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }}/>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'skyblue'
        }}/>
        <View
          style={{
          width: 50,
          height: 50,
          backgroundColor: 'steelblue'
        }}/>
      </View>
    );
  }
}

// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);

/* TextInput */
import {TextInput} from 'react-native';

class PizzTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={{
        padding: 10
      }}>
        <TextInput
          style={{
          height: 40
        }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}/>

        <Text style={{
          padding: 10,
          fontSize: 42
        }}>
          {this
            .state
            .text
            .split(' ')
            .map((word) => word && '🍕')
            .join(' ')}
        </Text>
      </View>

    );
  }
}

// AppRegistry.registerComponent('AwesomeProject', () => PizzTranslator);

/** ScrollView */