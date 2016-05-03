var React = require('react-native');
var {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  TabBarIOS,
} = React;
var SearchBar = require('react-native-search-bar');

var SearchBarExample = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <SearchBar
        placeholder='Search'
        textFieldBackgroundColor='white'
        style = {styles.searchBar}
        />
        </View>
    );
  }
});

var styles = StyleSheet.create({
  searchBar: {
    height: 40,
    marginTop: 100,
    backgroundColor: '#000000'
  },

});

module.exports = SearchBarExample
