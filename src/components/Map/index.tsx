import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { manageIcons } from "../../utils/manageIcons";
import { setSelectedCategory } from "../../redux/features/app-slice";
import { useFilteredTrucks } from "../../hooks/useFilteredTrucks";
interface MapProps {
    navigation: any;
}
const Map: React.FC<MapProps> = ({ navigation }: MapProps) => {
    const { categories, selectedCategory } = useAppSelector(state => state.appState);
    const { filteredTrucks } = useFilteredTrucks();
    const dispatch = useAppDispatch();

    const onHandlePress = (num: number) => {
        dispatch(setSelectedCategory(num));
    };

    return (
        <View style={styles.container}>
            <View style={styles.categoriesBlock}>
                {categories.map((cat, i) => {
                    return (
                        <TouchableOpacity style={{ opacity: cat.value === selectedCategory ? 1 : 0.5 }} onPress={() => onHandlePress(cat.value)} key={i}>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={{ color: 'black' }}>{cat.value === 0 ? 'All' : cat.label} </Text>
                                <View >{manageIcons(cat.categoryName)}</View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <MapView
                // mapType={Platform.OS == "android" ? "none" : "standard"}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {filteredTrucks.map((truck, index) => (
                    <Marker
                        key={index}
                        coordinate={truck.coordinates}
                        title={truck.drawer.fullName}
                        pinColor={categories.find(cat => cat.value === truck.categoryId)?.color || 'red'}
                        onPress={() => navigation.navigate('TruckDetails', { truck })}
                    >
                        {manageIcons(categories.find(cat => cat.value === truck.categoryId)?.categoryName || 'trucks')}
                    </Marker>
                ))}
            </MapView>
        </View >
    );
};

export default Map;