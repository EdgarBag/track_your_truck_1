import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import { useAppSelector } from "../../redux/hooks";
import { ITruck } from "../../interfaces/global";
import { manageIcons } from "../../utils/manageIcons";

interface DrawerMapProps {
    truck: ITruck;
}

const DrawerMap: React.FC<DrawerMapProps> = ({ truck }) => {
    const { categories, } = useAppSelector(state => state.appState);
    const { latitude, longitude } = truck.coordinates;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    key={truck.id}
                    coordinate={truck.coordinates}
                    title={truck.drawer.fullName}
                    pinColor={categories.find(cat => cat.value === truck.categoryId)?.color || 'red'}
                >
                    {manageIcons(categories.find(cat => cat.value === truck.categoryId)?.categoryName || 'trucks')}
                </Marker>

            </MapView>
        </View >
    );
};

export default DrawerMap;