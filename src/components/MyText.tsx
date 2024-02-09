import { FC, ReactNode } from "react";
import { TextStyle, Text, StyleSheet } from "react-native";

type MyTextProps = {
  children: ReactNode;
  style?: TextStyle;
};

const MyText: FC<MyTextProps> = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
