import { FC } from "react";
import { Pressable, Text } from "react-native";
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
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        padding: 8,
        backgroundColor: "#426c7245",
        borderWidth: isActive ? 2 : 0,
        borderColor: colors.primary,
      }}
      onPress={onPress}
    >
      <Text>{getFormattedDateFromTimestamp(timestamp)}</Text>
      <Text>{displayTemperature(temp)}</Text>
      <WeatherDetails description={""} icon={icon} />
    </Pressable>
  );
};

export default WeatherCardSmall;
