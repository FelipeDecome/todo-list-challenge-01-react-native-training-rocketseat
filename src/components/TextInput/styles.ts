import { StyleSheet } from "react-native";

import { interRegular } from "../../styles/fontFamily";

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "#262626",
    borderRadius: 6,
    borderColor: "#0D0D0D",
    borderStyle: "solid",
    borderWidth: 1,
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: interRegular,
    flex: 1,
    height: 54,
    padding: 16,
  },
  focus: {
    borderColor: "#5E60CE"
  },
})
