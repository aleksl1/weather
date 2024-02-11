import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction, useEffect } from "react";

type UseRetrieveCityType = {
  setCity?: Dispatch<SetStateAction<string>>;
  setIsInStorage?: Dispatch<SetStateAction<boolean>>;
};

const useRetrieveCity = ({
  setCity,
  setIsInStorage,
}: UseRetrieveCityType) => {
  const { getItem } = useAsyncStorage("city");
  useEffect(() => {
    const retrieveCity = async () => {
      const city = await getItem();
      if (city) {
        setCity && setCity(city);
        setIsInStorage && setIsInStorage(true);
      }
    };

    retrieveCity();
  }, [setCity, setIsInStorage]);
};

export default useRetrieveCity;
