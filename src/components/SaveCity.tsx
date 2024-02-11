import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "./CustomButton";

type SaveCityProps = {
  city: string;
  onClear: () => void;
};

const SaveCity: FC<SaveCityProps> = ({ city, onClear }) => {
  const { setItem, removeItem, getItem } = useAsyncStorage("city");
  const [isInStorage, setIsInStorage] = useState(false);

  useEffect(() => {
    const retrieveCity = async () => {
      const city = await getItem();
      if (city) {
        setIsInStorage(true);
      }
    };
    retrieveCity();
  }, []);

  return (
    <View style={styles.container}>
      <CustomButton
        text="Save as favourite"
        onPress={async () => await setItem(city, () => setIsInStorage(true))}
        disabled={!city || isInStorage}
        buttonColor="transparent"
      />
      <CustomButton
        text="Clear City"
        onPress={async () => {
          await removeItem(() => setIsInStorage(false));
          onClear();
        }}
        buttonColor="transparent"
        disabled={!isInStorage}
      />
    </View>
  );
};

export default SaveCity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 8,
    gap: 8,
  },
});
