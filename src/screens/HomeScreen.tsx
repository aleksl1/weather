import { FC, FunctionComponent } from "react";
import { Text, View } from "react-native";

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
