import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { lightTheme, darkTheme, ThemeType } from '../styles/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
    mode: ThemeMode;
    current: ThemeType;
}

const initialState: ThemeState = {
    mode: 'light',
    current: lightTheme,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state: ThemeState) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            state.current = state.mode === 'light' ? lightTheme : darkTheme;
            document.querySelector('html')?.setAttribute('data-theme', state.mode);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;