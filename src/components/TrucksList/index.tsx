import React from "react";
import { useCategories } from "../../hooks/useCategories";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { Item, } from "../TruckListItem";
import { DropDownCompCategories } from "../DropDownCompCategories";
import { useAppDispatch, } from "../../redux/hooks";
import { ITruck } from "../../interfaces/global";
import { useFilteredTrucks } from "../../hooks/useFilteredTrucks";
import { setFilteredTracksAction } from "../../redux/features/app-slice";
import trucks from '../../db/trucks.json';
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
interface TrucksListProps {
    navigation: any;
}

const TrucksList: React.FC<TrucksListProps> = ({ navigation }) => {
    const { setCategoriesAction } = useCategories(),
        { filteredTrucks } = useFilteredTrucks(),
        dispatch = useAppDispatch(),
        { t } = useTranslation();


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
            {filteredTrucks.length ? <FlatList
                style={styles.trucksListBox}
                data={filteredTrucks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<RefreshControl
                    refreshing={false}
                    onRefresh={onRefresh} />}
            /> :
                <View style={styles.messageBox}>
                    <Text style={styles.message}>{t('no_trucks_message')}</Text>
                </View>
            }
        </>
    );
};



export default TrucksList;