import { FC } from "react";
import { View, StyleSheet } from "react-native";
import MyText from "../MyText";
import WeatherDetails from "./WeatherDetails";
import { WeatherDataType } from "../../types/navigation.types";

type WeatherCardProps = WeatherDataType;

const WeatherCard: FC<WeatherCardProps> = ({
  city,
  current: { temp, feels_like, weather },
}) => {
  return (
    <View style={styles.weatherCard}>
      <MyText style={styles.cityText}>{city}</MyText>
      <MyText style={styles.tempText}>
        {Math.ceil(temp)} {"\u00B0"}C
      </MyText>
      <MyText style={styles.feelsLikeText}>
        feels like: {Math.ceil(feels_like)}
        {"\u00B0"}C
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
    backgroundColor: "#83bce5",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  weatherCard: {
    padding: 32,
    borderRadius: 8,
    backgroundColor: "lightblue",
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
