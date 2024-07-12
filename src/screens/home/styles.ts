import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    height: 200,
    justifyContent: "center",
  },
  logo: {
    height: 32,
    objectFit: "contain",
  },
  main: {
    gap: 32,
    marginTop: -32,
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: "row",
    gap: 4,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    height: 52,
    justifyContent: "center",
    width: 52,
  },
  icon: {
    height: 16,
    width: 16,
  },
})
