import { FC } from "react";
import { View, StyleSheet } from "react-native";
import MyText from "../MyText";
import WeatherDetails from "./WeatherDetails";
import { WeatherDataType } from "../../types/navigation.types";
import { colors } from "../../utils/colors";
import { displayTemperature } from "../../utils/utils";

type WeatherCardProps = WeatherDataType;

const WeatherCard: FC<WeatherCardProps> = ({
  city,
  current: { temp, feels_like, weather },
}) => {
  return (
    <View style={styles.weatherCard}>
      <MyText style={styles.cityText}>{city}</MyText>
      <MyText style={styles.tempText}>{displayTemperature(temp)}</MyText>
      <MyText style={styles.feelsLikeText}>
        feels like: {displayTemperature(feels_like)}
      </MyText>
      <View style={styles.weatherDetailsContainer}>
        {weather.map(({ description, icon }, index) => (
          <WeatherDetails
            key={`${icon}-${index}`}
            description={description}
            icon={icon}
          />
        ))}
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  weatherDetailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 36,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  weatherCard: {
    padding: 32,
    borderRadius: 8,
    backgroundColor: colors.primary,
    opacity: 0.8,
    margin: 16,
  },
  cityText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  tempText: {
    fontSize: 24,
    textAlign: "center",
  },
  feelsLikeText: {
    fontSize: 16,
    textAlign: "center",
  },
});
