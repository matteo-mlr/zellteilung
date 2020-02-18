import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

export default function App () {

    const [todos, setTodos] = useState([
        { name: 'buy coffee', key: '1'},
        { name: 'buy garlic', key: '2'},
        { name: 'buy water', key: '3'}
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        })
    };

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                { name: text, key: Math.random().toString()},
                ...prevTodos
            ]
        })
    }

    return (

        <View style={styles.container}>
            <Header />
            <View style={styles.list}>
                <AddTodo submitHandler={submitHandler}/>
                <FlatList 
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler}/>
                    )}
                />
            </View>
        </View>

    )

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    list: {
        paddingHorizontal: 40
    }

})