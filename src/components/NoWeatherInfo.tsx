import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import MyText from "./MyText";
import { colors } from "../utils/colors";

type NoWeatherInfoProps = {
  navigateToHome: () => void;
};

const NoWeatherInfo: FC<NoWeatherInfoProps> = ({ navigateToHome }) => {
  return (
    <>
      <MyText>There is no weather data available</MyText>
      <MyText>You need to go to Home and enter city name</MyText>
      <Pressable
        testID="go-to-home-button"
        style={styles.iconButton}
        onPress={navigateToHome}
      >
        <Ionicons name="arrow-back" size={24} color={colors.icon} />
        <MyText style={styles.iconButtonText}>Go to Home</MyText>
      </Pressable>
    </>
  );
};

export default NoWeatherInfo;

const styles = StyleSheet.create({
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 16,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 16,
    borderColor: colors.icon,
  },
  iconButtonText: {
    fontSize: 20,
    color: colors.icon,
  },
});
