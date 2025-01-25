// import { createContext, useContext, useState, useEffect } from "react";
// import { fetchPlants } from "../API";

// const PlantContext = createContext();

// export function PlantProvider({ children }) {
//   const [plants, setPlants] = useState([]);
//   const [plantDetails, setPlantDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [detailsLoading, setDetailsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getPlants = async () => {
//       try {
//         const data = await fetchPlants();
//         setPlants(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getPlants();
//   }, []);

//   const getPlantNameById = (id) => {
//     const plant = plants.find((plant) => plant.id === id);
//     return plant ? plant.name : "Plant not found";
//   };

//   const fetchPlantDetails = async (id) => {
//     setDetailsLoading(true);
//     try {
//       const data = await fetchDetails(id);
//       setPlantDetails(data);
//     } catch (error) {
//       console.error("Error fetching plant details:", error);
//       setError(error);
//     } finally {
//       setDetailsLoading(false);
//     }
//   };

//   return (
//     <PlantContext.Provider
//       value={{
//         plants,
//         plantDetails,
//         loading,
//         detailsLoading,
//         error,
//         fetchPlantDetails,
//       }}
//     >
//       {children}
//     </PlantContext.Provider>
//   );
// }

// export function usePlants() {
//   return useContext(PlantContext);
// }
