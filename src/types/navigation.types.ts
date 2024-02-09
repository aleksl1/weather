import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { FetchCurrentWeatherResponse } from "./api.types";

export type WeatherDataType = (FetchCurrentWeatherResponse & { city: string });

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Weather: WeatherDataType | undefined
};

export type HomeScreenType = FC<BottomTabScreenProps<BottomTabNavigatorParamList, "Home">>;

export type WeatherScreenType = FC<BottomTabScreenProps<BottomTabNavigatorParamList, "Weather">>;