import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [newGoals, setNewGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    setNewGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    setNewGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} />
        <FlatList 
          keyExtractor={(item, index) => item.id} 
          data={newGoals} 
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    borderBottomColor: 'black', 
    borderWidth: 1, 
    width: '80%'
  }
});
