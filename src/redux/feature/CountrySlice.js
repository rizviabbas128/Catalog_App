import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCountry = createAsyncThunk('countrys/fetchCountrys', async () => {
    return fetch(`https://restcountries.com/v3.1/all
    `).
    then((res) => res.json());
});

export const fetchSingleCountry = createAsyncThunk(`countrys/fetchSingleCountry`, async ({id}) => {
    return fetch(`https://restcountries.com/v3.1/alpha/${id}`).
    then((res) => res.json());
})

export const fetchSearchCountry = createAsyncThunk('countrys/fetchSearctCountrys', async ({seachName}) => {
    return fetch(`https://restcountries.com/v3.1/name/${seachName}`).
    then((res) => res.json());
})

const countrySlice = createSlice({
    name: 'countrys',
    initialState: {
        loading: false,
        countrys: [],
        error: null,
        country: [],
    },
    extraReducers: {
        [fetchCountry.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCountry.fulfilled]: (state, action) => {
            state.loading = false;
            state.countrys = action.payload;
        },
        [fetchCountry.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchSingleCountry.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSingleCountry.fulfilled]: (state, action) => {
            state.loading = false;
            state.country = action.payload;
        },
        [fetchSingleCountry.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchSearchCountry.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSearchCountry.fulfilled]: (state, action) => {
            state.loading = false;
            state.countrys = action.payload;
        },
        [fetchSearchCountry.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default countrySlice.reducer;