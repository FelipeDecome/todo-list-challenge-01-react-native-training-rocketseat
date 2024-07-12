import { CheckboxProps, Checkbox as ExpoCheckbox } from "expo-checkbox";
import { View } from "react-native";
import { styles } from "./styles";

export function Checkbox({ value, ...props }: CheckboxProps) {
  return (
    <View style={styles.container}>
      <ExpoCheckbox
        {...props}
        color={value ? "#5E60CE" : "#4EA8DE"}
        style={styles.checkbox}
        value={value}
      />
    </View>
  )
}
