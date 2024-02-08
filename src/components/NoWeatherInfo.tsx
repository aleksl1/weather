import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { View, Button, Text, StyleSheet, Pressable } from "react-native";

type NoWeatherInfoProps = {
  navigateToHome: () => void;
};

const NoWeatherInfo: FC<NoWeatherInfoProps> = ({ navigateToHome }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>There is no weather data available</Text>
      <Text style={styles.text}>
        You need to go to Home and enter city name
      </Text>
      <Pressable style={styles.iconButton} onPress={navigateToHome}>
        <Ionicons name="arrow-back" size={24} color="#1f388b" />
        <Text style={[styles.text, styles.iconButtonText]}>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default NoWeatherInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 16,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 16,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 16,
    borderColor: "#1f388b",
  },
  iconButtonText: {
    fontSize: 20,
    color: "#1f388b",
  },
});
