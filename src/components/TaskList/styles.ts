import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listHeaderItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  listHeaderItemText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listHeaderItemTextCreated: {
    color: "#4EA8DE",
  },
  listHeaderItemTextDone: {
    color: "#8284FA",
  },
  listHeaderItemNumber: {
    backgroundColor: "#333333",
    borderRadius: 999,
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  empty: {
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
    gap: 16,
    padding: 48,
  },
  emptyText: {
    color: "#808080",
    fontSize: 14,
  },
})
