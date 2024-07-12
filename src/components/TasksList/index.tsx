import { FlatList, Image, TouchableOpacity, View } from "react-native";

import { Task } from "../../types";

import { Checkbox } from "../Checkbox";
import { Strong } from "../Strong";
import { Text } from "../Text";

import { styles } from "./styles";

interface ITasksListProps {
  items: Task[];
}

function ListEmptyComponent() {
  return (
    <View style={styles.empty}>
      <Image source={require("../../assets/clipboard.png")} />
      <Text style={styles.emptyText}>
        <Strong>Você ainda não tem tarefas cadastradas.</Strong>
        {"\nCrie tarefas e organize seus itens a fazer"}
      </Text>
    </View>
  )
}

export function TasksList({ items }: ITasksListProps) {
  const totalTasks = items.length;
  const totalDoneTasks = items.filter((item) => item.isDone).length;

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
        data={items}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Checkbox
              color={"#5E60CE"}
              value={item.isDone}
            />
            <Text style={[styles.taskText, item.isDone && styles.taskTextDone]}>{item.title}</Text>
            <TouchableOpacity style={styles.deleteButton}>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  )
}
