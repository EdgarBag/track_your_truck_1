import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ITruck } from '../../interfaces/global';
import { styles } from './style';
import { useAppSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';

type ItemProps = {
    onPress: () => void;
    item: ITruck;
};

export const Item = ({ item, onPress, }: ItemProps) => {
    const { categories } = useAppSelector(state => state.appState);
    const { t } = useTranslation();
    return (
        <TouchableOpacity onPress={onPress}  >
            <View style={styles.item}>
                <View >
                    <Text style={{ opacity: 0.5 }}>{t('reg_number')}</Text>
                    <Text> {item.registration_number} </Text>
                </View>
                <View >
                    <Text style={{ opacity: 0.5 }}>{t('driver_full_name')}: </Text>
                    <Text> {item.drawer.fullName} </Text>
                </View>
                <View >
                    <Text style={{ opacity: 0.5 }}>{t('category')}: </Text>
                    <Text> {categories.find(cat => cat.value === item.categoryId)?.label} </Text>
                </View>
            </View>
        </TouchableOpacity>
    );


};

