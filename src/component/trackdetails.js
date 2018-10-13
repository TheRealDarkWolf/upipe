import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const TrackDetails = ({
    title,
    artist,
    onAddPress,
    onMorePress,
    onTitlePress,
    onArtistPress,
}) => (
    <View style = {styles.container}>
        <View style = {styles.wrapper}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.artist}>{artist}</Text>
        </View>
    </View>
);

export default TrackDetails;

const styles = StyleSheet.create({
    container: {
      paddingTop: 24,
      flexDirection: 'row',
      paddingLeft: 20,
      alignItems: 'center',
      paddingRight: 20,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    detailsWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
    artist: {
      color: 'rgba(255, 255, 255, 0.72)',
      fontSize: 12,
      marginTop: 4,
    },
});