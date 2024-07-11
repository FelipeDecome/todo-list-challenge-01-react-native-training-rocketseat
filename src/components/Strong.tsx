import { Text } from "react-native";

interface IStrongProps {
  children: React.ReactNode;
}

export function Strong({ children }: IStrongProps) {
  return <Text style={{ fontWeight: "bold" }}>{children}</Text>;
}
