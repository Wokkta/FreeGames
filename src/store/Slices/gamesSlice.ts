import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Game {
  id: number
  title: string;
  release_date?: string;
  publisher?: string;
  developer?: string;
  genre: string;
  thumbnail: string;
  screenshots?: string[];
  systemRequirements?: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  }

const initialState: Game[] = 
    [
        ]


export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {

    setGames: (_state, action: PayloadAction<Game[]>) => {
        return action.payload;
      },
  },
})

export const { setGames} = gamesSlice.actions

export default gamesSlice.reducer