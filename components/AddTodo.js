import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function AddTodo ({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (

        <View>
            <TextInput
                placeholder='add todo...'
                style={styles.textInput}
                onChangeText={changeHandler}
                onSubmitEditing={() => submitHandler(text)}
            />
            <Button
                title='ADD'
                onPress={() => submitHandler(text)}
            />
        </View>

    )

};

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})