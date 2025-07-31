import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const restData = createAsyncThunk("resturants/fetch", async (_, thunkApi) => {
  try {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.69892&lng=77.1607391";
    const response = await fetch(proxyServer + swiggyAPI);
    const data = await response.json();
    console.log(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue("Failed to fetch data from Swiggy");
  }
});

const restSlice = createSlice({
  name: "resturants",
  initialState: { restInfo: [], loading: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(restData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(restData.fulfilled, (state, action) => {
      state.loading = false;
      state.restInfo = action.payload.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    });
    builder.addCase(restData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default restSlice.reducer;
export {restData}