import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItem ({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.todoItem}>
                <Text style={styles.todoText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    todoItem: {
        padding: 18,
        marginTop: 25,
        backgroundColor: 'coral'
    },
    todoText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});