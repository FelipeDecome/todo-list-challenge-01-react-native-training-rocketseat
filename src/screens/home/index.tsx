import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { TasksList } from "../../components/TasksList";
import { TextInput } from "../../components/TextInput";

import { useTasks } from "../../context/TasksContext";
import { styles } from "./styles";

export function Home() {
  const [newTask, setNewTask] = useState('')
  const { addTask } = useTasks();

  function handleAddTask() {
    addTask(newTask);
    setNewTask('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            onChangeText={setNewTask}
            value={newTask}
          />

          <TouchableOpacity
            disabled={!newTask}
            onPress={handleAddTask}
            style={styles.button}
          >
            <Image style={styles.icon} source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        </View>

        <TasksList />
      </View>
    </View>
  )
}
