'use strict';

var React = require('react-native');
var SomeNewMenu = require('./SomeNewNavigator.ios.js');
var TableViewOne = require('./TableViewOne.ios');
var TableViewTwo = require('./TableViewTwo.ios');
var TableViewThree = require('./TableViewThree')

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

class TableViewMain extends Component {


  state = {
     avatarSource: null,
     videoSource: null
   };

  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight style={styles.button}
            onPress={this.navToTableViewOne.bind(this)}>
            <Text style={styles.buttonText}>Example 1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToTableViewTwo.bind(this)}>
            <Text style={styles.buttonText}>Example 2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToTableViewThree.bind(this)}>
            <Text style={styles.buttonText}>Example 3</Text>
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

  navToTableViewOne(){
    this.props.navigator.push({
        title: 'Example 1',
        component: TableViewOne,
      })

  }

  navToTableViewThree(){
    this.props.navigator.push({
        title: 'Example 1',
        component: TableViewThree,
      })

  }

  navToTableViewTwo(){
    this.props.navigator.push({
        title: 'Example 2',
        component: TableViewTwo,
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

module.exports = TableViewMain
