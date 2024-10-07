import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/users";

export const fetchData = createAsyncThunk("crud/fetchData", async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

export const addUser = createAsyncThunk("crud/addUser", async (user) => {
  const response = await axios.post(apiURL, user);
  return response.data;
});

export const updateUser = createAsyncThunk("crud/updateUser", async (user) => {
  const response = await axios.put(`${apiURL}/${user.id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk("crud/deleteUser", async (id) => {
  await axios.delete(`${apiURL}/${id}`);
  return id;
});

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData?.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action?.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state?.users?.push(action?.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user?.id === action?.payload.id
        );
        if (index >= 0) {
          state.users[index] = action?.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state?.users?.filter((user) => user?.id !== action?.payload);
      });
  },
});

export default crudSlice.reducer;
