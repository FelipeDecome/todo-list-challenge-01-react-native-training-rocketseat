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
  list: {
    gap: 8,
  },
  task: {
    alignItems: "center",
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    padding: 12,
  },
  taskText: {
    color: "#F2F2F2",
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  taskTextDone: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    alignItems: "center",
    height: 32,
    justifyContent: "center",
    width: 32,
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
    textAlign: "center",
  },
})
