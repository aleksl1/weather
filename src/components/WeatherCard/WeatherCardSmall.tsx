import { FC } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { getFormattedDateFromTimestamp } from "../../utils/date";
import { displayTemperature } from "../../utils/utils";
import WeatherDetails from "./WeatherDetails";

type WeatherCardSmallProps = {
  onPress: () => void;
  isActive: boolean;
  timestamp: number;
  temp: number;
  icon: string;
};

const WeatherCardSmall: FC<WeatherCardSmallProps> = ({
  onPress,
  isActive,
  timestamp,
  temp,
  icon,
}) => {
  return (
    <Pressable
      style={[styles.pressable, { borderWidth: isActive ? 2 : 0 }]}
      onPress={onPress}
    >
      <Text>{getFormattedDateFromTimestamp(timestamp)}</Text>
      <Text>{displayTemperature(temp)}</Text>
      <WeatherDetails description={""} icon={icon} />
    </Pressable>
  );
};

export default WeatherCardSmall;

const styles = StyleSheet.create({
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#426c7245",
    borderColor: colors.primary,
  },
});
