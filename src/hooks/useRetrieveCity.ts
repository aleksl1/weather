import { Dispatch, SetStateAction, useEffect } from "react";

type UseRetrieveCityType = {
  getItem: () => Promise<string | null>;
  setCity?: Dispatch<SetStateAction<string>>;
  setIsInStorage?: Dispatch<SetStateAction<boolean>>;
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
  }, [setCity, setIsInStorage]);
};

export default useRetrieveCity;
