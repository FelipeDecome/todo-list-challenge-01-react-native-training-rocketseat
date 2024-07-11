import { useState } from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <RNTextInput
      {...props}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      placeholderTextColor="#808080"
      style={[props.style, styles.input, isFocused && styles.focus]}
    />
  );
};
