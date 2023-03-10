import { configureStore } from '@reduxjs/toolkit'
import journeyReducer from './journeySlice'

export default configureStore({
  reducer: {
    journey: journeyReducer,
  },
})
