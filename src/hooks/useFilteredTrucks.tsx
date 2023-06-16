import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

export const useFilteredTrucks = () => {
    const { trucks, selectedCategory } = useAppSelector(state => state.appState);
    const [filteredTrucks, setFilteredTrucks] = useState(trucks);

    useEffect(() => {
        setFilteredTrucks(selectedCategory === 0 ? trucks : trucks.filter(truck => truck.categoryId === selectedCategory));
    }, [selectedCategory, trucks]);

    return { filteredTrucks };
};