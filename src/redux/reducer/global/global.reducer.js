
import { GET_GLOBAL } from './global.type'

const initialState = {
    global: []
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_GLOBAL:
            return {
                ...state,
                global: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default globalReducer