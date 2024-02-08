import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { FetchCurrentWeatherResponse } from "./api.types";

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Weather: FetchCurrentWeatherResponse;
};

export type HomeScreenType = FC<BottomTabScreenProps<BottomTabNavigatorParamList, "Home">>;

export type WeatherScreenType = FC<BottomTabScreenProps<BottomTabNavigatorParamList, "Weather">>;