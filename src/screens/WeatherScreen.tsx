import { Text, View } from "react-native";
import { WeatherScreenType } from "../types/navigation.types";

const WeatherScreen: WeatherScreenType = ({ route: { params } }) => {
  console.log("params", params);
  return (
    <View>
      <Text>Weather Screen</Text>
    </View>
  );
};

export default WeatherScreen;
