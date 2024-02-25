import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import SaveCity from "../components/SaveCity";
import { HomeScreenType } from "../types/navigation.types";
import { colors } from "../utils/colors";
import { checkWeather, validateCityInput } from "../utils/utils";
import useRetrieveCity from "../hooks/useRetrieveCity";
import { FetchCurrentWeatherResponse } from "../types/api.types";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DefaultTheme } from "@react-navigation/native";
import { getFormattedTodayDate } from "../utils/date";

const HomeScreen: HomeScreenType = ({ navigation: { navigate } }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherData, setWeatherData] = useState<
    FetchCurrentWeatherResponse & { city: string }
  >();
  const inputRef = useRef<TextInput>(null);

  const handleCheckWeather = async () => {
    const cityName = city.trim();
    const errorMessage = validateCityInput(cityName);
    if (errorMessage) return setErrorMessage(errorMessage);
    setLoading(true);
    const data = await checkWeather(cityName);
    if (!data) {
      setLoading(false);
      return setErrorMessage(
        "Unable to fetch weather data. Please try again later."
      );
    }
    setWeatherData({ ...data, city: cityName });
    inputRef.current?.blur();
    setLoading(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useRetrieveCity({ setCity });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={16}
    >
      <Text style={styles.dateText}>Today is {getFormattedTodayDate()}</Text>
      <View style={styles.divider}></View>
      <View style={styles.weatherCardContainer}>
        {weatherData && (
          <>
            <WeatherCard
              city={weatherData.city}
              current={weatherData.current}
            />
            <View style={styles.customButtonContainer}>
              <CustomButton
                leftIcon={
                  <Ionicons
                    name="calendar-outline"
                    color={DefaultTheme.colors.primary}
                    size={24}
                  />
                }
                text="See Weekly Forecast"
                onPress={() => navigate("Weather", { ...weatherData })}
                buttonColor="transparent"
              />
            </View>
          </>
        )}
      </View>
      <View style={styles.weatherFormContainer}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            testID="city-input"
            ref={inputRef}
            value={city}
            onChangeText={(text) => {
              setCity(text);
              setErrorMessage("");
            }}
            style={[styles.input, styles.border]}
            placeholder="Enter city name"
            placeholderTextColor={colors.tertiary}
            onBlur={() => setErrorMessage("")}
          />
        </View>
        <SaveCity city={city} onClear={() => setCity("")} />
        <View style={styles.buttonContainer}>
          <CustomButton
            leftIcon={
              <Ionicons
                name="sunny-sharp"
                color={DefaultTheme.colors.primary}
                size={24}
              />
            }
            text="Check Weather"
            disabled={loading}
            onPress={handleCheckWeather}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    margin: 32,
    gap: 8,
  },
  input: {
    width: "100%",
    padding: 8,
    height: 50,
    fontSize: 25,
    color: colors.tertiary,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  border: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  errorMessage: {
    color: colors.error,
    fontSize: 12,
  },
  buttonContainer: {
    width: "100%",
  },
  weatherFormContainer: {
    width: "100%",
    gap: 8,
  },
  weatherCardContainer: {
    flex: 1,
    justifyContent: "center",
  },
  dateText: {
    marginTop: 32,
    width: "100%",
    fontWeight: "bold",
    fontSize: 20,
  },
  customButtonContainer: {
    marginHorizontal: 16,
  },
  divider: {
    height: 2,
    backgroundColor: colors.primary,
    width: "100%",
    marginHorizontal: 64,
  },
});
