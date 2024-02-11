import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import MyText from "./MyText";
import { colors } from "../utils/colors";
import CustomButton from "./CustomButton";

type NoWeatherInfoProps = {
  navigateToHome: () => void;
};

const NoWeatherInfo: FC<NoWeatherInfoProps> = ({ navigateToHome }) => {
  return (
    <>
      <MyText>There is no weather data available</MyText>
      <MyText>You need to go to Home and enter city name</MyText>
      <CustomButton
        testID="go-to-home"
        onPress={navigateToHome}
        text="Go to Home"
        leftIcon={
          <Ionicons name="arrow-back" size={20} color={colors.tertiary} />
        }
      />
    </>
  );
};

export default NoWeatherInfo;
