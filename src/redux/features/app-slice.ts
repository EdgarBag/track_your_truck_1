import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ITruck } from '../../interfaces/global';
interface State {
    isLoading: boolean;
    categories: ICategory[];
    trucks: ITruck[];
    selectedCategory: number;

}

const initialState: State = {
    isLoading: false,
    categories: [],
    trucks: [],
    selectedCategory: 0
};

const counterSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setCategoriesAction: (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        },
        setFilteredTracksAction: (state, action: PayloadAction<ITruck[]>) => {
            state.trucks = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<number>) => {
            state.selectedCategory = action.payload;
        }

    },
});

export const { setLoading, setCategoriesAction, setFilteredTracksAction, setSelectedCategory } = counterSlice.actions;
export const selectedCategory = (state: State) => state.selectedCategory;
export default counterSlice.reducer;
