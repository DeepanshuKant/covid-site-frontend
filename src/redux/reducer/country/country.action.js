
import { GET_COUNTRY } from './country.type'
import axios from 'axios'
export const getCountry = (countryName) => async (dispatch) => {

    try {
        const getCountryList = await axios(
            {
                method: "GET",
                url: `https://covidbackendproject.herokuapp.com/cases/country/${countryName}`
            }
        )

        dispatch({ type: GET_COUNTRY, payload: getCountryList.data })

    } catch (error) {

        return dispatch({ type: "ERROR", payload: error })
    }
}