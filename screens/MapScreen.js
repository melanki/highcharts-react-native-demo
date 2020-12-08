import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Map from '../components/highcharts/Map';

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Map />
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
