import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:null,
        otherUsers:[],
        selectedUser:null,
        onlineUsers:null,
        searchData:null,
        authLoading:true
    },
    reducers:{
        setUserData:(state,action) => {
            state.userData=action.payload;
        },

        setOtherUsers:(state,action) => {
            state.otherUsers = action.payload;
        },

        setSelectedUser:(state,action) => {
            state.selectedUser = action.payload;
        },

        setOnineUsers:(state,action) => {
            state.onlineUsers = action.payload;
        },

        setSearchData:(state,action) => {
            state.searchData = action.payload;
        },

        setAuthLoading: (state, action) => {
            state.authLoading = action.payload;
        }

    }
})

export const {setUserData , setOtherUsers , setSelectedUser, setOnineUsers , setSearchData,setAuthLoading} = userSlice.actions;
export default userSlice.reducer;