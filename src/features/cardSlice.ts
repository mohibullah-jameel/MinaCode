import { createSlice } from '@reduxjs/toolkit';

interface PlayerData {
  id: number;
  realName: string;
  playerName: string;
  Asset: string;
}

interface selected {}

interface CardState {
  playerData: PlayerData[];
  selectedCard: selected;
}

const initialState: CardState = {
  playerData: [
    {
      id: 1,
      realName: 'Brianna Forbes',
      playerName: ' Dreamlurk The Unstoppable Dreamlurk The Unstoppable Dreamlurk The Unstoppable Dreamlurk The Unstoppable Dreamlurk The Unstoppable Dreamlurk The Unstoppable',
      Asset: 'Foghammer Lead',
    },
    {
      id: 2,
      realName: 'Darcy Candice Ball',
      playerName: 'Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash Crystaldash',
      Asset: 'Secret Glowquake Gold',
    },
    {
      id: 3,
      realName: 'Hillary Gibbs',
      playerName: 'Speedsoul',
      Asset: 'Shifting Rainshadow Iron',
    },
    {
      id: 4,
      realName: 'Elva Becky Hammond',
      playerName: 'Seekvenom The Mystic',
      Asset: 'Valkyries Opal Adamant',
    },
    {
      id: 5,
      realName: 'Enid Rose',
      playerName: 'Coincurse The Ghoul',
      Asset: 'Jewelevil Bronze Of Goddesses',
    },
    {
      id: 6,
      realName: 'Esmeralda Carrillo',
      playerName: 'Skulldart',
      Asset: 'Yellow Orichalcum Of Paladins',
    },
  ],
  selectedCard: [{}],
};

export const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    sortPlayerDataAsc: (state) => {
      state.playerData.sort((a, b) => a.realName.localeCompare(b.realName));
    },

    sortPlayerDataDsc: (state) => {
      state.playerData.sort((a, b) => b.realName.localeCompare(a.realName));
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = [action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { sortPlayerDataAsc, sortPlayerDataDsc, setSelectedCard } =
  cardSlice.actions;

export default cardSlice.reducer;
