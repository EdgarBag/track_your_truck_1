import { useEffect, useState } from "react";
import trucks from '../db/trucks.json';
import { useAppDispatch } from "../redux/hooks";
import { setFilteredTracksAction, setLoading } from "../redux/features/app-slice";


export const useFilterCategory = () => {

    const [categoryFilterValue, setCategoryFilterValue] = useState(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));

        // ONLOAD API
        setTimeout(() => {
            dispatch(setFilteredTracksAction(trucks));

            dispatch(setLoading(false));
        }, 2000);

    }, []);

    return { setCategoryFilterValue, categoryFilterValue };
};