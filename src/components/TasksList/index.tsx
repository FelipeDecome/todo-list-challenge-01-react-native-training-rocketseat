import { FlatList, Image, TouchableOpacity, View } from "react-native";

import clipboardSrc from "../../assets/clipboard.png";
import trashSrc from "../../assets/trash.png";
import { useTasks } from "../../context/TasksContext";

import { Checkbox } from "../Checkbox";
import { Strong } from "../Strong";
import { Text } from "../Text";

import { styles } from "./styles";


function ListEmptyComponent() {
  return (
    <View style={styles.empty}>
      <Image source={clipboardSrc} />
      <Text style={styles.emptyText}>
        <Strong>Você ainda não tem tarefas cadastradas.</Strong>
        {"\nCrie tarefas e organize seus itens a fazer"}
      </Text>
    </View>
  )
}

export function TasksList() {
  const { removeTask, tasks, toggleTask } = useTasks();

  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter((task) => task.isDone).length;

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <View style={styles.listHeaderItem}>
          <Text style={[styles.listHeaderItemText, styles.listHeaderItemTextCreated]}>
            Criadas
          </Text>
          <Text style={styles.listHeaderItemNumber}>
            {totalTasks}
          </Text>
        </View>

        <View style={styles.listHeaderItem}>
          <Text style={[styles.listHeaderItemText, styles.listHeaderItemTextDone]}>
            Concluídas
          </Text>
          <Text style={styles.listHeaderItemNumber}>
            {totalDoneTasks}
          </Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={({ id }) => id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Checkbox
              color="#5E60CE"
              value={item.isDone}
              onValueChange={() => toggleTask(item.id)}
            />
            <Text style={[styles.taskText, item.isDone && styles.taskTextDone]}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => removeTask(item.id)}
              style={styles.deleteButton}
            >
              <Image source={trashSrc} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  )
}
