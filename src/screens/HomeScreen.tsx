import { FC, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FetchCurrentWeatherResponse } from "../types/api.types";
import { checkWeather } from "../utils/utils";

const HomeScreen: FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<FetchCurrentWeatherResponse>();
  const [loading, setLoading] = useState(false);

  const handleCheckWeather = async () => {
    setLoading(true);
    const data = await checkWeather(city);
    if (data) setWeatherData(data);
    return setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={city}
          onChangeText={(text) => setCity(text)}
          style={[styles.input, styles.border]}
          placeholder="Enter city name"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          color="blue"
          title="Check Weather"
          onPress={handleCheckWeather}
          disabled={loading || !city}
        />
        <Button
          color="#120101a3"
          title="Remember this city"
          onPress={() => console.log("city", city)}
          disabled={!city}
        />
      </View>
      <View>
        <Text>{weatherData?.current.temp}</Text>
      </View>
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  border: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});
