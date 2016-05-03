'use strict';

var React = require('react-native');
var { AppRegistry } = React;
var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;

var countries = require('./countries.json')

class TableViewExample extends React.Component {
    render(){
      var country = "ES"
        return (
            <TableView selectedValue="" style={{flex:1}} json="states" filter={`country=='${country}'`}
                       tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
                       onPress={(event) => console.log(event)}>
                <Item value="">All states</Item>
            </TableView>
        );
    }
}

module.exports = TableViewExample
