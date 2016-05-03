'use strict';

var React = require('react-native');
var SomeNewMenu = require('./SomeNewNavigator.ios.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
  AlertIOS, // Thanks Kent!
  Dimensions,
  NavigatorIOS,
} = React;

class NavigatorView extends Component {


  state = {
     avatarSource: null,
     videoSource: null
   };

  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight style={styles.button}
            onPress={this.navToNewMenu.bind(this)}>
            <Text style={styles.buttonText}>New Menu</Text>
          </TouchableHighlight>
      </View>
    );
  }
  navToNewMenu(){
    this.props.navigator.push({
        title: 'New Menu',
        titleTextColor: '#48BBEC',
        component: SomeNewMenu,
      })
    }


};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = NavigatorView
