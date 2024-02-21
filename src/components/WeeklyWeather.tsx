import { FC, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { DailyWeatherDataType } from "../types/api.types";
import WeatherCard from "./WeatherCard/WeatherCard";
import WeatherCardSmall from "./WeatherCard/WeatherCardSmall";

type WeeklyWatherProps = {
  city: string;
  weeklyData: DailyWeatherDataType[];
};

//todo: add more details to weather card, add day/night weather

const WeeklyWather: FC<WeeklyWatherProps> = ({ weeklyData, city }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.horizontalScrollView}
        contentContainerStyle={styles.horizontalScrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        {weeklyData.map((day, index) => {
          return (
            <WeatherCardSmall
              onPress={() => setSelectedDay(index)}
              key={day.dt}
              isActive={selectedDay === index}
              timestamp={day.dt}
              temp={day.temp.day}
              icon={day.weather[0].icon}
            />
          );
        })}
      </ScrollView>
      <WeatherCard
        current={{
          temp: weeklyData[selectedDay].temp.day,
          feels_like: weeklyData[selectedDay].feels_like.day,
          weather: weeklyData[selectedDay].weather,
        }}
        city={city}
      />
    </View>
  );
};

export default WeeklyWather;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    gap: 16,
  },
  horizontalScrollView: {
    marginHorizontal: 16,
  },
  horizontalScrollViewContent: {
    gap: 16,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});
