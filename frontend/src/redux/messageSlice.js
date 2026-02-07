import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"message",
    initialState:{
        messages:[],
        messagesLoading: false,
    },
    reducers:{
        setMessages:(state,action) => {
            state.messages=action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        setMessagesLoading: (state, action) => {
            state.messagesLoading = action.payload;
        },
    }
})

export const {setMessages,addMessage,setMessagesLoading} = messageSlice.actions;
export default messageSlice.reducer;