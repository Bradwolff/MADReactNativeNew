'use strict';

var React = require('react-native');
var { AppRegistry } = React;
var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;

var countries = require('./countries.json')

class TableViewExample extends React.Component {
    render(){
      return (
          <TableView selectedValue="ES" style={{flex:1}} json="countries"
                     tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
                     onPress={(event) => console.log(event)}/>
      );
    }
}

module.exports = TableViewExample
