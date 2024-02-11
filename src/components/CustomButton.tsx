import React, { FC } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  TextStyle,
} from "react-native";
import { colors } from "../utils/colors";

type CheckWeatherButtonProps = PressableProps & {
  text: string;
  textStyles?: TextStyle;
  buttonColor?: string;
  buttonPressedColor?: string;
  textColor?: string;
  textPressedColor?: string;
};

const CustomButton: FC<CheckWeatherButtonProps> = ({
  text,
  textStyles,
  buttonColor = colors.primary,
  buttonPressedColor = colors.secondary,
  textColor = colors.tertiary,
  textPressedColor = colors.primary,
  ...rest
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? buttonPressedColor : buttonColor,
        },
        styles.buttonContainer,
      ]}
      {...rest}
    >
      {({ pressed }) => (
        <Text
          style={[
            { color: pressed ? textPressedColor : textColor },
            styles.buttonText,
            textStyles,
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: colors.primary,
    borderWidth: 2,
    // width: "100%",
    // flexBasis: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
