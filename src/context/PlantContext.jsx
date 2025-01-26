import React, { createContext, useContext, useState, useCallback } from "react";
import { fetchPlantList, fetchPlantDetails } from "../API";

const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
  const [plantsCache, setPlantsCache] = useState({});
  const [plantDetailsCache, setPlantDetailsCache] = useState({});
  const [plants, setPlants] = useState([]);
  const [plantDetails, setPlantDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get the plant list with caching
  const getPlantList = useCallback(
    async (page = 1, query = "") => {
      const cacheKey = `${page}_${query}`;
      if (plantsCache[cacheKey]) {
        setPlants(plantsCache[cacheKey]);
        return;
      }

      setLoading(true);
      try {
        const data = await fetchPlantList(page, query);
        setPlants(data.data);
        setPlantsCache((prevCache) => ({
          ...prevCache,
          [cacheKey]: data.data,
        }));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [plantsCache]
  );

  const getPlantDetails = useCallback(
    async (id) => {
      if (plantDetailsCache[id]) {
        setPlantDetails(plantDetailsCache[id]);
        return;
      }

      setLoading(true);
      try {
        const data = await fetchPlantDetails(id);
        setPlantDetails(data);
        setPlantDetailsCache((prevCache) => ({
          ...prevCache,
          [id]: data,
        }));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [plantDetailsCache]
  );

  return (
    <PlantContext.Provider
      value={{
        plants,
        plantDetails,
        loading,
        error,
        getPlantList,
        getPlantDetails,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};

export const usePlant = () => useContext(PlantContext);
