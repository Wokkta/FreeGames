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
      
      const cats = action.payload.map(game=>game.genre)
      const prepCats = cats.concat()

      function onlyUnique(value:string, index:number, array:string[]) {
        return array.indexOf(value) === index;
      }
      

      
      var unique = prepCats.filter(onlyUnique);

      console.log(unique)
      //console.clear()
      console.log(action.payload)
        return action.payload;
      },
  },
})

export const { setGames} = gamesSlice.actions

export default gamesSlice.reducer