import { createSlice } from '@reduxjs/toolkit'

const journeySlice = createSlice({
  name: 'journey',
  initialState: {
    journeys: [],
  },
  reducers: {
    addJourney: (state, action) => {
      state.journeys.push(action.payload)
    },

    reset: (state) => {
      state = initialState
    },
  },
})

export const { addJourney } = journeySlice.actions

export default journeySlice.reducer
