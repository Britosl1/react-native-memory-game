import {configureStore, combineReducers} from '@reduxjs/toolkit';
import player from './slices';

const rootReducer = combineReducers({
  player: player,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
