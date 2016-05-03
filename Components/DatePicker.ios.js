//'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} = React;

var DateTimePicker = require('react-native-datetime').default;
var Button = require('@remobile/react-native-simple-button');

console.ignoredYellowBox = [
      'Warning: Failed propType',
      // Other warnings you don't want like 'jsSchedulingOverhead',
    ];

module.exports = React.createClass({

    getInitialState() {
        return {
            date: new Date(),
        }
    },
    showDatePicker() {
        var date = this.state.date;
        this.picker.showDatePicker(date, (d)=>{
            this.setState({date:d});
        });
    },
    showTimePicker() {
        var date = this.state.date;
        this.picker.showTimePicker(date, (d)=>{
            this.setState({date:d});
        });
    },
    showDateTimePicker() {
        var date = this.state.date;
        this.picker.showDateTimePicker(date, (d)=>{
            this.setState({date:d});
        });
    },

    onDateChange(){
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>
                    {this.state.date.toString()}
                </Text>
                <View style={{height:40}} />
                <Button onPress={this.showDatePicker}>showDatePicker</Button>
                <View style={{height:40}} />
                <Button onPress={this.showTimePicker}>showTimePicker</Button>
                <View style={{height:40}} />
                <Button onPress={this.showDateTimePicker}>showDateTimePicker</Button>
                <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop:20,
    },
});
