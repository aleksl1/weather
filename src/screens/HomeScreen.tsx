import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import SaveCity from "../components/SaveCity";
import { HomeScreenType } from "../types/navigation.types";
import { colors } from "../utils/colors";
import { checkWeather, validateCityInput } from "../utils/utils";

const HomeScreen: HomeScreenType = ({ navigation: { navigate } }) => {
  const [city, setCity] = useState("");
  const { getItem } = useAsyncStorage("city");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
    setLoading(false);
    return navigate("Weather", { ...data, city: cityName });
  };

  useEffect(() => {
    const retrieveCity = async () => {
      const city = await getItem();
      if (city) {
        setCity(city);
      }
    };
    retrieveCity();
    inputRef.current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <View style={styles.inputContainer}>
        <TextInput
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
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Check Weather 🔆"
          disabled={loading}
          onPress={handleCheckWeather}
        />
      </View>
      <SaveCity city={city} onClear={() => setCity("")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
});
