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
        {
          id: 1,
          title: 'The Fantasy Quest',
          release_date: '15.10.2023',
          publisher: 'Mystic Studios',
          developer: 'Adventure Game Studios',
          genre: 'Adventure',
          thumbnail: 'fantasy_quest_poster.jpg',
          screenshots: [
            'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
            'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
            'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
          ],
          systemRequirements: {
            os: 'Windows 10',
            processor: 'Intel Core i5',
            memory: '8 GB RAM',
            graphics: 'NVIDIA GeForce GTX 1060',
            storage: '20 GB available space',
          },
        }]


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

// Action creators are generated for each case reducer function
export const { setGames} = gamesSlice.actions

export default gamesSlice.reducer