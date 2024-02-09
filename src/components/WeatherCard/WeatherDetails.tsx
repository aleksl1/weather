import { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { getIconUri } from "../../api/api";
import MyText from "../MyText";

type WeatherDetailsProps = {
  description: string;
  icon: string;
};

const WeatherDetails: FC<WeatherDetailsProps> = ({ description, icon }) => {
  return (
    <View style={styles.weatherDetails}>
      <MyText style={styles.weatherDetailsText}>{description}</MyText>
      <Image
        source={{ uri: getIconUri(icon) }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  weatherDetails: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  weatherDetailsText: {
    alignSelf: "center",
  },
});
