import React, { FC } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  View,
  TextProps,
} from "react-native";
import { colors } from "../utils/colors";

type CheckWeatherButtonProps = PressableProps & {
  text: string;
  textProps?: TextProps;
  buttonColor?: string;
  buttonPressedColor?: string;
  textColor?: string;
  textPressedColor?: string;
  leftIcon?: React.ReactNode;
};

const CustomButton: FC<CheckWeatherButtonProps> = ({
  text,
  textProps,
  buttonColor = colors.primary,
  buttonPressedColor = colors.secondary,
  textColor = colors.tertiary,
  textPressedColor = colors.primary,
  disabled,
  leftIcon,
  ...rest
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? buttonPressedColor : buttonColor,
          opacity: disabled ? 0.5 : 1,
        },
        styles.buttonContainer,
      ]}
      disabled={disabled}
      {...rest}
    >
      {({ pressed }) => (
        <View style={styles.buttonContentContainer}>
          {leftIcon && leftIcon}
          <Text
            style={[
              { color: pressed ? textPressedColor : textColor },
              styles.buttonText,
            ]}
            {...textProps}
          >
            {text}
          </Text>
        </View>
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
  },
  buttonContentContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
