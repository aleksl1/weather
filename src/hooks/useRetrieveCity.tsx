import { useEffect } from "react";

type UseRetrieveCityType = {
  getItem: () => Promise<string | null>;
  setCity?: (city: string) => void;
  setIsInStorage?: (isInStorage: boolean) => void;
};

const useRetrieveCity = ({
  getItem,
  setCity,
  setIsInStorage,
}: UseRetrieveCityType) => {
  useEffect(() => {
    const retrieveCity = async () => {
      const city = await getItem();
      if (city) {
        setCity && setCity(city);
        setIsInStorage && setIsInStorage(true);
      }
    };

    retrieveCity();
  }, [getItem, setCity, setIsInStorage]);
};

export default useRetrieveCity;
