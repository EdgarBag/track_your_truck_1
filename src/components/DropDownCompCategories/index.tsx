import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";
import { useFilterCategory } from "../../hooks/useFilterCategory";
import { setSelectedCategory } from "../../redux/features/app-slice";


interface DropDownProps {
    setItems(value: any): void;
}

export const DropDownCompCategories: React.FC<DropDownProps> = ({ setItems, }) => {
    const { selectedCategory } = useAppSelector(state => state.appState);
    const [open, setOpen] = useState(false),
        [value, setValue] = useState(selectedCategory),
        { setCategoryFilterValue } = useFilterCategory(),
        { categories, } = useAppSelector(state => state.appState), { t } = useTranslation(),
        dispatch = useAppDispatch();

    useEffect(() => {
        setCategoryFilterValue(value);
        dispatch(setSelectedCategory(value));
    }, [value]);

    return (
        <>
            <DropDownPicker
                open={open}
                value={value}
                items={categories}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{ borderColor: '#008080', backgroundColor: '#dbe8e0', }}
                searchable
                addCustomItem={true}
                translation={{
                    PLACEHOLDER: t('search_drop_down_select_sent'),
                    SEARCH_PLACEHOLDER: t('search_drop_down_placeholder')
                }}
            />
        </>
    );
};