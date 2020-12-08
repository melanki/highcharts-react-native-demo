import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ChartScreen from './screens/ChartScreen'
import MapScreen from './screens/MapScreen'
import StockScreen from './screens/StockScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Stock" component={StockScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}