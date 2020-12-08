import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import LineChart from '../components/highcharts/LineChart';

export default function ChartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LineChart />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
