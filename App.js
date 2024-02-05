import { StatusBar } from 'expo-status-bar';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

export default function App() {

  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, { text: task, completed: false }]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    // itemsCopy.splice(index, 1);
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  }

  const deleteTask = (index) => {
    // Alert.alert(
    //   "Delete Task",
    //   "Are you sure you want to delete this task?",
    //   [
    //     { text: "Delete", onPress: () => handleDeleteTask(index) },
    //     { text: "Cancel", style: "cancel" }
    //   ]
    // )
    setDeleteModalVisible(true);
  }
  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setDeleteModalVisible(false);
  }


  return (
    <View style={styles.container}>
      {/* todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* this is where is the tasks */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)} onLongPress={() => deleteTask(index)}>
                <Task text={item.text} completed={item.completed} />
              </TouchableOpacity>
            )
          })}
        </View>

      </View>

      {/* writing tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder='Write a task...' value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/*delete msg*/}
      <Modal isVisible={deleteModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete Task</Text>
          <Text style={styles.modalText}>Are you sure you want to delete this task?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleDeleteTask}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDeleteModalVisible(false)}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F5'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {},

  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent:'flex-end'

  },
  cancelButton: {
    paddingLeft:8,
    paddingTop:3,
    width: 60,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center', // Metni yatay eksende ortalar
    color: 'white', // Yazı rengi beyaz
    backgroundColor: '#756AB6',
  },
  deleteButton: {
    marginRight: 10,
    paddingLeft:8,
    paddingTop:3,
    width: 60,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center', // Metni yatay eksende ortalar
    color: '#756AB6', // Yazı rengi beyaz
    backgroundColor: '#fff',
    borderColor:'#756AB6',
    borderWidth: 2
  },
});
