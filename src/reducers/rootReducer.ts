import { combineReducers } from 'redux';
import userReducer from './userSlice';
import messageReducer from './messageSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer
});
