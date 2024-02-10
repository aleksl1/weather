import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { FetchCurrentWeatherResponse } from "./api.types";

export type WeatherDataType = (FetchCurrentWeatherResponse & { city: string });

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Weather: WeatherDataType | undefined
};

type ScreenType<T extends keyof BottomTabNavigatorParamList> = FC<BottomTabScreenProps<BottomTabNavigatorParamList, T>>;

export type HomeScreenType = ScreenType<"Home">;

export type WeatherScreenType = ScreenType<"Weather">