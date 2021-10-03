import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [newGoals, setNewGoals] = useState([]);



  const addGoalHandler = goalTitle => {
    setNewGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle}]);
  }

  return (
    <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList 
          keyExtractor={(item, index) => item.id} 
          data={newGoals} 
          renderItem={itemData => <GoalItem onDelete={() => console.log("asd")} title={itemData.item.value} />}
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
