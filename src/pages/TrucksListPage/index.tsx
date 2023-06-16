import React, { useState } from 'react';
import { Button, Text, View, } from "react-native";
import { DefaultPage } from "../DefaultPage";
import TrucksList from "../../components/TrucksList";
import Map from "../../components/Map";
import { styles } from './styles';
import { useTranslation } from "react-i18next";
interface PageProps {
    navigation: any;
}

const TracksListPage: React.FC<PageProps> = ({ navigation }) => {
    const [viewOnMap, setViewOnMap] = useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <DefaultPage style={{ flex: 1, alignItems: 'center' }} >

            <View style={styles.body}>
                {viewOnMap ?
                    <Map navigation={navigation} />
                    :
                    <TrucksList navigation={navigation} />
                }
            </View>
            <Button
                title={!viewOnMap ? t('button_go_to_map', 'Show On The Map111') : t('button_go_to_truck_list', 'Back to Trucks List111')}
                onPress={() => setViewOnMap(prevState => !prevState)}
            />
        </DefaultPage>
    );
};



export default TracksListPage;