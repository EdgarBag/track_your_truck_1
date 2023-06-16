import { Categories, ITruck } from "../interfaces/global";
import TruckSpecialCarAll from 'react-native-vector-icons/MaterialCommunityIcons';
import Passenger from 'react-native-vector-icons/Fontisto';

export const manageIcons = (categoryName: string) => {
    switch (categoryName) {
        case Categories.truck:
            return <TruckSpecialCarAll
                name="truck-fast"
                size={20}
            />;
        case Categories.passenger:
            return <Passenger
                name="taxi"
                size={16}
            />;
        case Categories.special:
            return <TruckSpecialCarAll
                name="binoculars"
                size={20}
            />;
        case Categories.all:
            return <TruckSpecialCarAll
                name="check-all"
                size={20}
            />;

        default:
            return <TruckSpecialCarAll
                name="car"
                size={20}
            />;
    }

};