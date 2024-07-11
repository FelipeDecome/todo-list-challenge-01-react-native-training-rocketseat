import { FlatList, Image, Text, View } from "react-native";

import { Strong } from "../Strong";

import { styles } from "./styles";

type Task = {
  id: number;
  isDone: boolean;
  title: string;
}

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

export function TaskList({ items }: ITasksListProps) {
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
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  )
}
