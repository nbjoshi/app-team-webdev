import PlantProductView from "../components/PlantProductView";
import PlantDetailsView from "../components/PlantDetailsView";
import Recommendation from "../components/Recommendation";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlantContext } from "../context/PlantContext";

export default function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPlantById } = useContext(PlantContext);
  const plant = getPlantById(Number(id));

  useEffect(() => {
    if (!plant) {
      navigate("/404");
    }
  }, [plant, navigate]);

  if (!plant) {
    return null;
  }

  return (
    <>
      <PlantProductView plant={plant} />
      <PlantDetailsView plant={plant} />
      <Recommendation />
    </>
  );
}
