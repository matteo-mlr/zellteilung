import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function Cell ({ item, x, y }) {

    return (

        <TouchableWithoutFeedback>
            <View style={[styles.cell, {left: x, top: y}]}></View>
        </TouchableWithoutFeedback>

    )

};

const styles = StyleSheet.create({
    cell: {
        height: 20,
        width: 20,
        backgroundColor: 'coral',
        borderRadius: 100,
        margin: 5,
        position: 'absolute'
    }
})