import React from "react";
import { useCategories } from "../../hooks/useCategories";
import { FlatList, RefreshControl } from "react-native";
import { Item, } from "../TruckListItem";
import { DropDownCompCategories } from "../DropDownCompCategories";
import { useAppDispatch, } from "../../redux/hooks";
import { ITruck } from "../../interfaces/global";
import { useFilteredTrucks } from "../../hooks/useFilteredTrucks";
import { setFilteredTracksAction } from "../../redux/features/app-slice";
import trucks from '../../db/trucks.json';
interface TrucksListProps {
    navigation: any;
}

const TrucksList: React.FC<TrucksListProps> = ({ navigation }) => {
    const { setCategoriesAction } = useCategories(),
        { filteredTrucks } = useFilteredTrucks(),
        dispatch = useAppDispatch();


    const renderItem = ({ item }: { item: ITruck; }) => {
        return <Item item={item} onPress={() => onTappedItem(item)} />;
    };

    const onTappedItem = (truck: ITruck) => {

        navigation.navigate('TruckDetails', { truck });
    };

    const onRefresh = () => {
        //Calling API to get updated trucks list
        dispatch(setFilteredTracksAction(trucks));
    };

    return (
        <>
            <DropDownCompCategories
                setItems={setCategoriesAction}
            />
            <FlatList
                style={{ flex: 1, width: '100%' }}
                data={filteredTrucks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<RefreshControl
                    refreshing={false}
                    onRefresh={onRefresh} />}
            />
        </>
    );
};



export default TrucksList;