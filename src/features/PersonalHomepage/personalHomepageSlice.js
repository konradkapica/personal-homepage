import { createSlice } from "@reduxjs/toolkit"

const personalHomepageSlice = createSlice({
    name: 'personaHomepage',
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepos: () => ({
            repositories: null,
            status: "loading",
        }),
        fetchReposSuccess: (_, {payload: repositories}) => ({
            repositories,
            status: "success",
        }),
        fetchReposError: () => ({
            repositories: null,
            status: "error",
        }),
    },
});

export const {
    fetchRepos,
    fetchReposSuccess,
    fetchReposError,
} = personalHomepageSlice.actions;

const selectPersonaHomepageState = (state) => state.personalHomepage;

export const selectRepos = (state) => selectPersonaHomepageState(state).repositories;
export const selectReposStatus = (state) => selectPersonaHomepageState(state).status;

export default personalHomepageSlice.reducer;