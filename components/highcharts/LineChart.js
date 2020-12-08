import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native'

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {
                chart: {
                    backgroundColor: '#222222'
                },
                title: {
                    text: 'Chart',
                    style: {
                        color: '#ffffff'
                    }
                },
                series: [{
                    data: [1, 2, 3]
                }]
            }
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 20,
    }
});