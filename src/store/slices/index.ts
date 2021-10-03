import {createSlice} from '@reduxjs/toolkit';

export type Player = {
  name: string;
  score: number;
};

const initialState: Player = {
  name: '',
  score: 0,
};

const player = createSlice({
  name: 'Initial Name',
  initialState: initialState,
  reducers: {},
});

export default player.reducer;
