import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import SaveCity from "../components/SaveCity";
import { HomeScreenType } from "../types/navigation.types";
import { colors } from "../utils/colors";
import { checkWeather, validateCity } from "../utils/utils";

const HomeScreen: HomeScreenType = ({ navigation: { navigate } }) => {
  const [city, setCity] = useState("");
  const { getItem } = useAsyncStorage("city");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleCheckWeather = async () => {
    if (!city)
      return setErrorMessage("Please enter a city name to check the weather.");
    const isValid = validateCity(city);
    if (!isValid) return setErrorMessage("Please enter a valid city name.");
    setLoading(true);
    const data = await checkWeather(city);
    if (!data) {
      setLoading(false);
      return setErrorMessage(
        "Unable to fetch weather data. Please try again later."
      );
    }
    setLoading(false);
    return navigate("Weather", { ...data, city });
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
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          value={city}
          onChangeText={(text) => setCity(text)}
          style={[styles.input, styles.border]}
          placeholder="Enter city name"
          placeholderTextColor={colors.tertiary}
          onFocus={() => setErrorMessage("")}
        />
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Button
        color={colors.secondary}
        title="Check Weather 🔆"
        onPress={handleCheckWeather}
        disabled={loading}
      />
      {city && <SaveCity city={city} onClear={() => setCity("")} />}
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
    gap: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    height: 50,
    fontSize: 25,
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
    fontSize: 16,
  },
});
