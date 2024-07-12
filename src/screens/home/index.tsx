import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { TasksList } from "../../components/TasksList";
import { TextInput } from "../../components/TextInput";
import { Task } from "../../types";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      isDone: false,
      title: "Criar aplicativo"
    }, {
      id: 2,
      isDone: true,
      title: "Criar componentes"
    }, {
      id: 3,
      isDone: false,
      title: "Criar estilos",
    },
    {
      id: 4,
      isDone: false,
      title: "Integer urna interdum massa libero auctor neque turpis turpis semper."
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
          />

          <TouchableOpacity style={styles.button}>
            <Image style={styles.icon} source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        </View>

        <TasksList items={tasks} />
      </View>
    </View>
  )
}
