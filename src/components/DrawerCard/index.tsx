import React from "react";
import { Text, View } from "react-native";
import { ITruck, TypeOfContact } from "../../interfaces/global";
import { styles } from "./styles";
import { useAppSelector } from "../../redux/hooks";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconT from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';
import { useTranslation } from "react-i18next";
interface ITruckProps {
    truck: ITruck;
}


export const DrawerCard: React.FC<ITruckProps> = ({ truck }) => {
    const { categories } = useAppSelector((state) => state.appState);
    const { t } = useTranslation();

    const contactDrawer = (num: number, type: TypeOfContact) => {
        if (type === TypeOfContact.call) {
            Linking.openURL(`tel:+${num}`);
        } else {
            Linking.openURL(`whatsapp://send?text=${t('whatsapp_message')}&phone=${num}`);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.name}>{truck.drawer.fullName}</Text>
                    <Text style={styles.p}>{t('category')}: {categories.find(cat => cat.value === truck.categoryId)?.label}</Text>
                    <Text style={styles.p}>{t('phone_number')}: {truck.drawer.phone}</Text>
                    <View style={styles.iconsBox}>
                        <Icon
                            name="whatsapp"
                            size={60}
                            color={'green'}
                            onPress={() => contactDrawer(truck.drawer.phone, TypeOfContact.whatsapp)}
                        />
                        <IconT
                            name="phone"
                            size={60}
                            color={'#008080'}
                            onPress={() => contactDrawer(truck.drawer.phone, TypeOfContact.call)}
                        />
                    </View>
                </View>
                <View style={styles.iconBox}>
                    <Icon
                        name="child"
                        size={60}
                    />
                </View>
            </View>

        </>
    );
};