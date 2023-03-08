import {configureStore} from '@reduxjs/toolkit'
import loaderReducer from './loaders-slice'
import userReducer from './usersSlice'

const store =  configureStore({
    reducer:{
        loaders : loaderReducer,
        users : userReducer
    }
})

export default store