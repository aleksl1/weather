import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import { BottomTabNavigatorParamList } from "../types/navigation.types";
import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
        tabBarStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
