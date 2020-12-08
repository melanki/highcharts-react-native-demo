import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview'


const Map = () => {
    const stockHTML = require('../../assets/stocks/stock/stock.html')
    return (
        <View style={styles.container}>
            <WebView source={stockHTML} javaScriptEnabled={true} domStorageEnabled={true} mixedContentMode='always'/>
        </View>
    )
         
    
}

export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 30,
    }
});