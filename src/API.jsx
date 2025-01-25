// const API_KEY = import.meta.env.VITE_API_KEY;
// const Plant_List_URL = "https://perenual.com/api/species-list?key=";
// const Plant_Details_URL = "https://perenual.com/api/species/details/";

// export async function fetchPlants() {
//   try {
//     const response = await fetch(`${Plant_List_URL}${API_KEY}`);
//     if (!response.ok) {
//       console.error("Error fetching plant data");
//       return [];
//     }
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching plant data:", error);
//     return [];
//   }
// }

// export async function fetchDetails(id) {
//   try {
//     const response = await fetch(`${Plant_Details_URL}${id}?key=${API_KEY}`);
//     if (!response.ok) {
//       console.error("Error fetching plant details");
//       return [];
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching plant details:", error);
//     return [];
//   }
// }
