import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
    id: string;
    text: string;
    timestamp: number;
}

interface MessagesState {
    messages: Message[];
}

const initialState: MessagesState = {
    messages: [],
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
        deleteMessage: (state, action: PayloadAction<string>) => {
            state.messages = state.messages.filter(message => message.id !== action.payload);
        },
    },
});

export const { addMessage, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;
