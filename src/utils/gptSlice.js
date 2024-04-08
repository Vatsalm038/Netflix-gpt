import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
        movieResults: null,
        movieNamesCame : null

    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state,action) => {
            const {movieNamesCame,movieResults} = action.payload;
            state.movieNamesCame = movieNamesCame;
            state.movieResults =  movieResults

        }
    }
});

export const {toggleGptSearchView , addGptMovieResult}  = gptSlice.actions;
export default gptSlice.reducer;