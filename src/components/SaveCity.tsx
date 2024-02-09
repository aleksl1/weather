import { FC, useEffect, useState } from "react";
import { Button, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

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
    <View>
      <Button
        title="Save City"
        onPress={async () => await setItem(city, () => setIsInStorage(true))}
        disabled={!city}
      />
      <Button
        title="Clear City"
        onPress={async () => {
          await removeItem();
          onClear();
        }}
        disabled={!isInStorage}
      />
    </View>
  );
};

export default SaveCity;
