import { Platform } from "react-native";

export const interRegular = Platform.select({
  android: "Inter_400Regular",
  ios: "Inter-Regular",
});
