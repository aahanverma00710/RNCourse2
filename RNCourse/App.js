
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoals, setCourseGoals] = useState([]);


  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      console.warn('Please enter a valid goal');
      return;
    }
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    endAddGoalHandler()
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appConinter} >
      <Button
        title='Add New Goal'
        color='#d6c5edff'
        onPress={startAddGoalHandler} />

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer} >
        <FlatList data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItems
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )
          }
          } keyExtractor={(item, index) => { return item.id }} />
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appConinter: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 8,
  },


});