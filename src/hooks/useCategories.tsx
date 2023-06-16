import { useEffect, useState } from "react";
import text from '../db/trucksCategories.json';
import { ICategory } from "../interfaces/global";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCategoriesAction } from "../redux/features/app-slice";

export const useCategories = () => {

    const dispatch = useAppDispatch();
    const { categories } = useAppSelector(state => state.appState);
    useEffect(() => {

        dispatch(setCategoriesAction(text));
    }, []);

    return { categories, setCategoriesAction };
};