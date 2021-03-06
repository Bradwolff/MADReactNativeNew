'use strict';

var React = require('react-native');
var Maps = require('./Maps');
var ActivityIndicatorClass = require('./ActivityIndicator');
var NavigatorView = require('./NavigatorView.ios');
var TableViewMain = require('./TableViewMain.ios');
var SearchBar = require('./SearchBar.ios');
var DatePicker = require('./DatePicker.ios');
var Toolbar = require('./Toolbar.ios');
var ModalView = require('./ModalView.ios');
var ActivityView = require('./ActivityView.ios');
var {DeviceEventEmitter} = React;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
  AlertIOS, // Thanks Kent!
  VibrationIOS,
  Dimensions,
  NavigatorIOS,
  Image,
  PixelRatio,
  DeviceEventEmitter,
  NativeModules: {
   ImagePickerManager
 }
} = React;

class UserInterface extends Component {


  state = {
     avatarSource: null,
     videoSource: null
   };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}
            onPress={this.showAlert}>
            <Text style={styles.buttonText}>Alert IOS</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.pickImage}>
            <Text style={styles.buttonText}>Image Picker</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToActivityIndicator.bind(this)}>
            <Text style={styles.buttonText}>Activity Indicator</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToMaps.bind(this)}>
            <Text style={styles.buttonText}>Maps</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navigatorView.bind(this)}>
            <Text style={styles.buttonText}>Navigator View</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.tableView.bind(this)}>
            <Text style={styles.buttonText}>Table View</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToSearchBar.bind(this)}>
            <Text style={styles.buttonText}>Search Bar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToDatePicker.bind(this)}>
            <Text style={styles.buttonText}>Date Picker</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.notAvailableButton}>
            <Text style={styles.buttonText}>Toolbar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToModalView.bind(this)}>
            <Text style={styles.buttonText}>Modal View</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
            onPress={this.navToActivityView.bind(this)}>
            <Text style={styles.buttonText}>Activity View</Text>
          </TouchableHighlight>

      </View>
    );
  }

  tableView(){
    this.props.navigator.push({
      title: '',
      component: TableViewMain,
      onLeftButtonPress: () => this.props.navigator.pop(),
      leftButtonTitle:'Back',
    })

  }

  navToActivityView(){

    this.props.navigator.push({
      title: '',
      component: ActivityView,
      onLeftButtonPress: () => this.props.navigator.pop(),
      leftButtonTitle:'Back',
    })
  }

  navToModalView(){
    this.props.navigator.push({
      title: '',
      component: ModalView,
      onLeftButtonPress: () => this.props.navigator.pop(),
      leftButtonTitle:'Back',
    })

  }

  navToToolbar(){
    this.props.navigator.push({
      title: '',
      leftButtonTitle:'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: Toolbar,
    })
  }

  navToSearchBar(){
    this.props.navigator.push({
      title: '',
      leftButtonTitle:'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: SearchBar,
    })

  }

  navToDatePicker(){
    this.props.navigator.push({
      title: '',
      leftButtonTitle:'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: DatePicker,
    })

  }

  navigatorView(){
    this.props.navigator.push({
      title: 'Some Menu',
      titleTextColor: '#48BBEC',
      leftButtonTitle:'UserInterface',
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: NavigatorView,
    })
  }

  navToActivityIndicator(){
    this.props.navigator.push({
      title: '',
      leftButtonTitle:'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: ActivityIndicatorClass,
    })
  }

  navToMaps(){
    this.props.navigator.push({
      title: '',
      leftButtonTitle:'Back',
      component: Maps,
    })
  }

  showAlert() {
    AlertIOS.alert('Awesome Alert', 'This is my first React Native alert.', [{text: 'Thanks'}] )
  }

  pickImage() {

    const options = {
      title: 'Photo Picker',
      quality: 0.5,
      maxWidth: 300,
      maxHeight: 300,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either:
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        //const source = {uri: response.uri.replace('file://', ''), isStatic: true};

      }
    });
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
  notAvailableButton:{
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#FF0000',
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = UserInterface
