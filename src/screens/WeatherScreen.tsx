import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fetchCityData, fetchWeatherForaWeek } from "../api/api";
import NoWeatherInfo from "../components/NoWeatherInfo";
import WeeklyWather from "../components/WeeklyWeather";
import { DailyWeatherDataType } from "../types/api.types";
import { WeatherScreenType } from "../types/navigation.types";
import { colors } from "../utils/colors";

const WeatherScreen: WeatherScreenType = ({
  navigation: { navigate },
  route: { params },
}) => {
  const navigateToHome = () => navigate("Home");
  const [weekData, setWeekData] = useState<DailyWeatherDataType[]>();

  const getWeekWeather = async (city: string) => {
    const coords = await fetchCityData(city);
    if (coords) {
      const data = await fetchWeatherForaWeek(coords.lat, coords.lon);
      if (data) setWeekData(data.daily);
    }
  };

  useEffect(() => {
    if (params?.city) getWeekWeather(params.city);
  }, [params?.city]);

  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        colors={["#28c9f1", colors.primary]}
        style={[StyleSheet.absoluteFillObject]}
      />
      <View style={styles.container}>
        {!params ? (
          <NoWeatherInfo navigateToHome={navigateToHome} />
        ) : (
          weekData &&
          params?.city && (
            <WeeklyWather weeklyData={weekData} city={params?.city} />
          )
        )}
      </View>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    backgroundColor: "linear-gradient(180deg, #90a8c9 0%, #8b1144 100%)",
  },
  container: {
    marginTop: 64,
    gap: 8,
  },
});
