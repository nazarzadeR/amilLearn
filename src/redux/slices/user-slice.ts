import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { TUserMeta } from "../../type";
import { defaultUsers } from "../../data/data";

const initialState = {
  users: defaultUsers,
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<TUserMeta>) {
      state.users = [...state.users, action.payload];
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.key !== action.payload);
    },
    editUser(state, action: PayloadAction<TUserMeta>) {
      state.users = state.users.map((user) => {
        if (user.key === action.payload.key) {
          return { ...user, ...action.payload };
        }

        return user;
      });
    },
  },
});

export const getUsers = (state: RootState) => state.users.users;

export const { addUser, removeUser, editUser } = counterSlice.actions;

export default counterSlice.reducer;
