import { Image, TouchableOpacity, View } from "react-native";

import { TextInput } from "../../components/TextInput";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
          />

          <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
