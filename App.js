import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [newGoals, setNewGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setNewGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} 
        onChangeText={goalInputHandler} value={enteredGoal} 
        />
        
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {newGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black', 
    borderWidth: 1, 
    width: '80%'
  },
  listItem: {
    padding: 10,
    marginWertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
