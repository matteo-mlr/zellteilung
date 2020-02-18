import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header () {

    return (
        <View style={styles.header}>
            <Text style={styles.text}>MY TODOS</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 52,
        backgroundColor: 'coral',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
})