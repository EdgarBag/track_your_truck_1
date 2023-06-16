import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { DefaultPage } from "../DefaultPage";
import { ITruck } from "../../interfaces/global";
import { DrawerCard } from "../../components/DrawerCard";
import DrawerMap from "../../components/DrawerMap";

interface ITruckPage {
    route: any;
}

const TruckPage: React.FC<ITruckPage> = ({ route }) => {
    const { truck }: { truck: ITruck; } = route.params;
    return (
        <DefaultPage>
            <DrawerCard truck={truck} />
            <DrawerMap truck={truck} />
        </DefaultPage>
    );
};


export default TruckPage;