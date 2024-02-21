import { FC, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { DailyWeatherDataType } from "../types/api.types";
import WeatherCard from "./WeatherCard/WeatherCard";
import WeatherCardSmall from "./WeatherCard/WeatherCardSmall";
import {
  getFormattedDateFromTimestamp,
  getFormattedTimeFromTimestamp,
} from "../utils/date";
import { useFocusEffect } from "@react-navigation/native";
import CustomButton from "./CustomButton";

type WeeklyWatherProps = {
  city: string;
  weeklyData: DailyWeatherDataType[];
};

//todo: add more details to weather card, add day/night weather

const WeeklyWather: FC<WeeklyWatherProps> = ({ weeklyData, city }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [nightWeather, setNightWeather] = useState(false);

  useEffect(() => {
    setSelectedDay(0);
  }, [weeklyData]);

  const getCurrentWeatherCardProps = () => {
    const {
      temp: { night: nightTemp, day: dayTemp },
      feels_like: { night: nightFeelsLike, day: dayFeelsLike },
      weather,
    } = weeklyData[selectedDay];
    const temp = nightWeather ? nightTemp : dayTemp;
    const feels_like = nightWeather ? nightFeelsLike : dayFeelsLike;
    return {
      temp,
      feels_like,
      weather,
    };
  };

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
      <WeatherCard current={getCurrentWeatherCardProps()} city={city} />
      <Text>{weeklyData[selectedDay].summary}</Text>
      <Text>
        Sunrise:{getFormattedTimeFromTimestamp(weeklyData[selectedDay].sunrise)}
      </Text>
      <Text>
        Sunset:{getFormattedTimeFromTimestamp(weeklyData[selectedDay].sunset)}
      </Text>
      <Text>Pressure:{weeklyData[selectedDay].pressure} hPa</Text>
      <CustomButton
        text={nightWeather ? "Show Day Weather" : "Show Night Weather"}
        onPress={() => setNightWeather(!nightWeather)}
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
