import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [newGoals, setNewGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setNewGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]);
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
        <FlatList 
          keyExtractor={(item, index) => item.id} 
          data={newGoals} 
          renderItem={itemData => <GoalItem title={itemData.item.value} />}
        />

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
  }
});
