
import { GET_GLOBAL } from './global.type'
import axios from 'axios'


export const getAllGlobal = () => async (dispatch) => {
    try {
        const globalData = await axios(
            {
                method: "GET",
                url: "http://localhost:3001/cases/global"
            }
        )
        return dispatch({ type: GET_GLOBAL, payload: globalData.data })

    } catch (error) {

        return dispatch({ type: "ERROR", payload: error })
    }
}