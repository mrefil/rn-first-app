import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalItem = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} 
        onChangeText={goalInputHandler} value={enteredGoal} 
        />
        
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }
})

export default GoalItem;