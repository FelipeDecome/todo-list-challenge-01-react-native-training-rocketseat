import { Text as RNText, TextProps } from "react-native";

import { interRegular } from "../styles/fontFamily";

export function Text({ children, ...rest }: TextProps) {
  return (
    <RNText {...rest} style={[rest.style, {
      fontFamily: interRegular,
    }]}>{children}</RNText>
  )
}
