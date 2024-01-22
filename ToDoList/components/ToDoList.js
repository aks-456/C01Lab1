import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import "react-native-get-random-values"; // apparently needed for android
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'


const ToDoList = ({ initialValues }) => {

    const [toDo, setToDo] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));


    const addToDo = (newTitle) => {
        const newToDo = { id: uuidv4(), title: newTitle };
        setToDo((prevToDo) => [...prevToDo, newToDo]);
    };


    
    const removeToDo = (id) => {
        setToDo((prevToDo) => prevToDo.filter((td) => td.id !== id));
    };


    return (
        <View style={styles.todoListContainer}>
        
        {toDo.map((td) => (
            <View key={td.id}>
                <View style={styles.todoItem}>
                    <Text>{td.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(td.id)} />
                </View>
            </View>
        ))}

        <AddTask onAddTask={addToDo} />
        
        </View>
      );    
};

ToDoList.defaultProps = {
    initialValues: [],
  };


const styles = StyleSheet.create({
todoListContainer: {
    margin: 10,
},
todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
},
});

export default ToDoList;