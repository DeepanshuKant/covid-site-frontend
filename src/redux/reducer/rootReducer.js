

import { combineReducers } from 'redux'
import global from './global/global.reducer'
import countryReducer from './country/country.reducer'

const rootReducer = combineReducers(
    {
        global, countryReducer
    }
)

export default rootReducer