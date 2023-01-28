import { createSlice } from "@reduxjs/toolkit"

const personalHomepageSlice = createSlice({
    name: 'personaHomepage',
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {

    },
});

export default personalHomepageSlice.reducer;