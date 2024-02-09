import { View, StyleSheet } from "react-native";
import NoWeatherInfo from "../components/NoWeatherInfo";
import { WeatherScreenType } from "../types/navigation.types";
import WeatherCard from "../components/WeatherCard/WeatherCard";

const WeatherScreen: WeatherScreenType = ({
  navigation: { navigate },
  route: { params },
}) => {
  const navigateToHome = () => navigate("Home");

  return (
    <View style={styles.container}>
      {params ? (
        <WeatherCard {...params} />
      ) : (
        <NoWeatherInfo navigateToHome={navigateToHome} />
      )}
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
